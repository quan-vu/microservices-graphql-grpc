import datetime
from sqlalchemy import DECIMAL, Column, DateTime, ForeignKey, Integer, String
from base import Base


class Product(Base):
    __tablename__ = 'product'

    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String(100))
    slug = Column(String(150))
    thumbnail = Column(String(500))
    description = Column(String(500))
    price = Column(Integer)
    in_stock = Column(Integer)

    def __init__(self, name, slug, thumbnail, description, price, in_stock):
        self.name = name
        self.slug = slug
        self.thumbnail = thumbnail
        self.description = description
        self.price = price
        self.in_stock = in_stock


    def __repr__(self):
        return "<Product(name='{}', slug='{}', price={}, in_stock={})>"\
                .format(self.name, self.slug, self.price, self.in_stock)


    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "slug": self.slug,
            "thumbnail": self.thumbnail,
            "description": self.description,
            "price": self.price,
            "in_stock": self.in_stock, 
        }
