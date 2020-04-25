
# coding=utf-8

# 1 - imports
from datetime import date
from base import Session, engine, Base 
from models import Order, OrderItem

# 2 - generate database schema
Base.metadata.create_all(engine)

# 3 - create a new session
session = Session()

order_items = [
    {
        "product_id": 1,
        "price": 15000999,
        "quantity": 123
    },
    {
        "product_id": 2,
        "price": 200000,
        "quantity": 123
    }      
]

order = Order(
    order_items=[
        OrderItem(
            product_id=order_item['product_id'],
            price=order_item['price'],
            quantity=order_item['quantity'],
        )
        for order_item in order_items
    ]
)

session.add(order)
session.commit()
session.refresh(order)
session.close()