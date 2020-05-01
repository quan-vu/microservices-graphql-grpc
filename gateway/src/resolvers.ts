import { getLogger } from 'log4js';
import { ordersGrpcClient, productsGrpcClient } from './clients';

const logger = getLogger('resolvers');
logger.level = 'debug';

const resolvers = {
  Query: {
    product: async (_, { id }) => {
      const response = await productsGrpcClient.getProductAsync({ id });
      return response;
    },
    products: async () => {
      const response = await productsGrpcClient.listProductsAsync({ });
      return response.products;
    },
    productsPagination: async (_, { first, offset }) => {
      const response = await productsGrpcClient.listProductsAsync({ first, offset });
      return {
        totalCount: response.totalCount,
        products: response.products
      };
    },
    order: async (_, { id }) => {
      const response = await ordersGrpcClient.getOrderAsync({ id });
      console.log(response)
      return response;
    },
  },
  OrderItem: {
    product: async parent => {
      const response = await productsGrpcClient.getProductAsync({
        id: parent.productId,
      });
      return response;
    },
  },
  Mutation: {
    createProduct: async (_, { input }) => {
      const response = await productsGrpcClient.createProductAsync({
        ...input,
      });
      return response;
    },
    createOrder: async (_, { input }) => {
      const response = await ordersGrpcClient.createOrderAsync({
        ...input,
      });
      return response;
    },
    updateOrder: async (_, { input }) => {
      const response = await ordersGrpcClient.updateOrderAsync({
        ...input,
      });
      return response;
    },
    deleteOrder: async (_, { input }) => {
      const response = await ordersGrpcClient.deleteOrderAsync({
        ...input,
      });
      console.log(response);
      return response;
    },
  },
};

export { resolvers };
