import datetime
from sqlalchemy import Column, DateTime, ForeignKey, Integer, String, DECIMAL
from sqlalchemy.orm import backref, relationship
from base import Base


class Order(Base):
    __tablename__ = "order"

    id = Column(Integer, primary_key=True, autoincrement=True)
    order_items = relationship("OrderItem", lazy='joined')

    def to_dict(self):
        return {
            "id": self.id,
            "order_items": [
                order_item.to_dict() for order_item in self.order_items
            ],
        }


class OrderItem(Base):
    __tablename__ = "order_item"

    id = Column(Integer, primary_key=True, autoincrement=True)
    order_id = Column(
        Integer, ForeignKey("order.id", name="fk_order_items_order"), nullable=False
    )
    # order = relationship(
    #     Order, backref=backref("order_items", cascade="all, delete-orphan")
    # )
    product_id = Column(String, nullable=False)
    price = Column(DECIMAL(18, 2), nullable=False)
    quantity = Column(Integer, nullable=False)

    def to_dict(self):
        return {
            "id": self.id,
            "product_id": self.product_id,
            "price": str(self.price),
            "quantity": self.quantity,
        }

