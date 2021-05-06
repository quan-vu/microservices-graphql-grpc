from base import Session
from models import Product
from sqlalchemy import func

class Storage():

    def __init__(self):
        self.session = Session()

    def create(self, product):
        product = Product(
            name=product['name'],
            slug=product['slug'],
            thumbnail=product['thumbnail'],
            description=product['description'],
            price=product['price'],
            in_stock=product['in_stock'],
        )
        self.session.add(product)
        self.session.commit()
        self.session.refresh(product)
        self.session.close()
        return product.to_dict()

    def get(self, product_id):
        product = self.session.query(Product).filter(Product.id == product_id).first()
        self.session.close()
        if product:
            return product.to_dict()

    def get_all(self, limit, offset):
        result = []        
        limit = limit if limit else 0
        offset = offset if offset else 0

        if limit:
            products = self.session.query(Product).limit(limit).offset(offset)
        else:
            products = self.session.query(Product).all()

        self.session.close()
        for item in products:
            result.append({
                "id": item.id,
                "name": item.name,
                "slug": item.slug,
                "thumbnail": item.thumbnail,
                "description": item.description,
                "price": item.price,
                "in_stock": item.in_stock,
            })
        return result

    def count_total(self):
        total_count = self.session.query(func.count(Product.id)).scalar()
        self.session.close()
        return total_count