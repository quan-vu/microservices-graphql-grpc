from base import Session
from models import Product

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

    def get_all(self):
        result = []
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