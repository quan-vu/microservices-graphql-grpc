from base import Session
from models import Product

class Storage():

    def __init__(self):
        self.session = Session()

    def get(self, product_id):
        product = self.session.query(Product).filter(Product.id == product_id).first()
        if product:
            return product.to_dict()

    def get_all(self):
        result = []
        products = self.session.query(Product).all()
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