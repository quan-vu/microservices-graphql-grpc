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

    def update(self, order_id, order_items):
        order_items_dict = {}
        for item in order_items:
            if item.id:
                order_items_dict[item.product_id] = OrderItem(
                    id=item.id,
                    product_id=item.product_id,
                    price=item.price,
                    quantity=item.quantity,
                )
            else:
                order_items_dict[item.product_id] = OrderItem(
                    product_id=item.product_id,
                    price=item.price,
                    quantity=item.quantity,
                )

        # Step 1: Get current order
        order = self.session.query(Order).filter_by(id=order_id).first()
        order_update = order
        _exist_items = []
        _update_items = []

        # Step 2: Update items data if exist
        i = 0
        for order_item in order.order_items:
            _product_id = order_item.product_id
            _exist_items.append(_product_id)
            
            # Update order item data
            if _product_id in order_items_dict:
                _item = order_items_dict[_product_id]
                order_update.order_items[i].quantity = _item.quantity 
                order_update.order_items[i].price = _item.price
                order_items_dict[_product_id].id = order_item.id 

                _update_items.append(_product_id)

            i = i + 1  
            
        # Step 3: Add new item if not exist
        for _, orderItem in order_items_dict.items():
            if not orderItem.id:
                order_update.order_items.append(orderItem)

        # Step 4: Delete items
        _delete_items = list(set(_exist_items) - set(_update_items)) if len(_exist_items) >= len(_update_items) else []
        if len(_delete_items):
            for order_item in order_update.order_items:
                if order_item.product_id in _delete_items:
                    self.session.delete(order_item)

        self.session.add(order_update)
        self.session.commit()
        self.session.refresh(order_update)
        self.session.close()

        return order.to_dict()

    def delete(self, order_id):
        order = self.session.query(Order).filter_by(id=order_id).first()
        result = {
            "deleted": False,
            "message": ''
        }

        if not order:
            result = {
                "deleted": False,
                "message": 'Order not exist!'
            }
        else:
            try:
                self.session.delete(order)
                self.session.commit()
                self.session.close()
                result = {
                    "deleted": True,
                    "message": 'Success to delete order ID: %s' % str(order_id) 
                }
            except Exception as ex:
                print(ex)
                result = {
                    "deleted": False,
                    "message": 'Fail to delete order ID: %s' % str(order_id) 
                }

        return result
        
        

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