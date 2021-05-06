import json
from app.db.repositories.product_repository import ProductRepository
from app.requests.product_request import ProductCreateRequest


class TestDatanase:


    def test_create_product(self):
        data = {
            "organization_id": 1,
            "name": "RC Car 1/10 for kid",
            "slug": "rc-car-1-10-for-kid",
            "thumbnail": "https://ainc.vn/wp-content/uploads/2021/03/alpha-Logo.png",
            "description": "RC Car for kid can play together!!!",
            "price": 15.00,
            "in_stock": 10,
        }

        product_create = ProductCreateRequest(**data)
        product = ProductRepository().create(product_create)


        # assert response.status_code == 201
