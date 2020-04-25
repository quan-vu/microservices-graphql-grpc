from base import Session
from models import Order, OrderItem
from sqlalchemy import func

class Storage():

    def __init__(self):
        self.session = Session()

    def create(self, order_items):
        
        order = Order(
            order_items=[
                OrderItem(
                    product_id=order_item.product_id,
                    price=order_item.price,
                    quantity=order_item.quantity,
                )
                for order_item in order_items
            ]
        )
        
        self.session.add(order)
        self.session.commit()
        self.session.refresh(order)
        self.session.close()
        return order.to_dict()

    def get(self, order_id):
        order = self.session.query(Order).filter(Order.id == order_id).first()
        self.session.close()
        if order:
            return order.to_dict()

    def get_all(self, limit, offset):
        result = []        
        limit = limit if limit else 0
        offset = offset if offset else 0

        if limit:
            orders = self.session.query(Order).limit(limit).offset(offset)
        else:
            orders = self.session.query(Order).all()

        self.session.close()
        for item in orders:
            result.append(item.to_dict())
        return result

    def count_total(self):
        total_count = self.session.query(func.count(Order.id)).scalar()
        self.session.close()
        return total_count