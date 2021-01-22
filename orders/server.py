# Author: Quan Vu
# Description: A simple implement gRPC 

from concurrent import futures
import logging

import grpc

from orders_pb2 import GetOrderRequest, CreateOrderRequest, UpdateOrderRequest, DeleteOrderRequest, \
    OrderResponse, OrderItemResponse, OrderDeletedResponse
from orders_pb2_grpc import ordersStub, ordersServicer, add_ordersServicer_to_server

from storage import Storage

class OrderService(ordersServicer):

    storage = Storage()

    def create_order(self,request, context):
        order_items = request.order_items
        new_order = self.storage.create(order_items)
        return OrderResponse(**new_order)

    def get_order(self, request, context):
        order_id = request.id
        order = self.storage.get(order_id)
        return OrderResponse(**order)

    def update_order(self, request, context):
        order_id = request.id
        order_items = request.order_items
        order = self.storage.update(order_id, order_items)
        return OrderResponse(**order)

    def delete_order(self, request, context):
        order_id = request.id
        try:
            dict_deleted = self.storage.delete(order_id)
            return OrderDeletedResponse(**dict_deleted)
        except Exception as ex:
            raise ex

    
def serve():
    server = grpc.server(futures.ThreadPoolExecutor(max_workers=100))
    add_ordersServicer_to_server(OrderService(), server)
    # Don't use insecure_port in production
    server.add_insecure_port('[::]:50052')
    server.start()
    print('Started order service at: 127.0.1:50052')
    server.wait_for_termination()


if __name__ == '__main__':
    logging.basicConfig()
    serve()
    