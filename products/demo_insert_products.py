# coding=utf-8

# 1 - imports
from datetime import date
from base import Session, engine, Base 
from models import Product

# 2 - generate database schema
Base.metadata.create_all(engine)

# 3 - create a new session
session = Session()

product_1 = Product(
    'iPhone 11', 
    'iphone-11', 
    'https://www.didongmy.com/vnt_upload/product/01_2020/11/mo-hop-iphone-11.jpg',
    'camera chính vẫn có độ phân giải 12 MP thì chúng ta sẽ có thêm một camera góc siêu rộng và cũng với độ phân giải tương tự.',
    22500000,
    20)

session.add(product_1)

# 10 - commit and close session
session.commit()
session.close()