"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const log4js_1 = require("log4js");
const clients_1 = require("./clients");
const logger = log4js_1.getLogger('resolvers');
logger.level = 'debug';
const resolvers = {
    Query: {
        product: (_, { id }) => __awaiter(void 0, void 0, void 0, function* () {
            const response = yield clients_1.productsGrpcClient.getProductAsync({ id });
            return response;
        }),
        products: () => __awaiter(void 0, void 0, void 0, function* () {
            const response = yield clients_1.productsGrpcClient.listProductsAsync({});
            return response.products;
        }),
        productsPagination: (_, { first, offset }) => __awaiter(void 0, void 0, void 0, function* () {
            const response = yield clients_1.productsGrpcClient.listProductsAsync({ first, offset });
            return {
                totalCount: response.totalCount,
                products: response.products
            };
        }),
        order: (_, { id }) => __awaiter(void 0, void 0, void 0, function* () {
            const response = yield clients_1.ordersGrpcClient.getOrderAsync({ id });
            return response;
        }),
    },
    OrderDetail: {
        product: (parent) => __awaiter(void 0, void 0, void 0, function* () {
            const response = yield clients_1.productsGrpcClient.getProductAsync({
                id: parent.productId,
            });
            return response;
        }),
    },
    Mutation: {
        createProduct: (_, { input }) => __awaiter(void 0, void 0, void 0, function* () {
            const response = yield clients_1.productsGrpcClient.createProductAsync(Object.assign({}, input));
            return response;
        }),
        createOrder: (_, { input }) => __awaiter(void 0, void 0, void 0, function* () {
            const response = yield clients_1.ordersGrpcClient.createOrderAsync(Object.assign({}, input));
            return response;
        }),
    },
};
exports.resolvers = resolvers;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzb2x2ZXJzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3Jlc29sdmVycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLG1DQUFtQztBQUNuQyx1Q0FBaUU7QUFFakUsTUFBTSxNQUFNLEdBQUcsa0JBQVMsQ0FBQyxXQUFXLENBQUMsQ0FBQztBQUN0QyxNQUFNLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQztBQUV2QixNQUFNLFNBQVMsR0FBRztJQUNoQixLQUFLLEVBQUU7UUFDTCxPQUFPLEVBQUUsQ0FBTyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFO1lBQzNCLE1BQU0sUUFBUSxHQUFHLE1BQU0sNEJBQWtCLENBQUMsZUFBZSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztZQUNsRSxPQUFPLFFBQVEsQ0FBQztRQUNsQixDQUFDLENBQUE7UUFDRCxRQUFRLEVBQUUsR0FBUyxFQUFFO1lBQ25CLE1BQU0sUUFBUSxHQUFHLE1BQU0sNEJBQWtCLENBQUMsaUJBQWlCLENBQUMsRUFBRyxDQUFDLENBQUM7WUFDakUsT0FBTyxRQUFRLENBQUMsUUFBUSxDQUFDO1FBQzNCLENBQUMsQ0FBQTtRQUNELGtCQUFrQixFQUFFLENBQU8sQ0FBQyxFQUFFLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxFQUFFLEVBQUU7WUFDakQsTUFBTSxRQUFRLEdBQUcsTUFBTSw0QkFBa0IsQ0FBQyxpQkFBaUIsQ0FBQyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDO1lBQy9FLE9BQU87Z0JBQ0wsVUFBVSxFQUFFLFFBQVEsQ0FBQyxVQUFVO2dCQUMvQixRQUFRLEVBQUUsUUFBUSxDQUFDLFFBQVE7YUFDNUIsQ0FBQztRQUNKLENBQUMsQ0FBQTtRQUNELEtBQUssRUFBRSxDQUFPLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUU7WUFDekIsTUFBTSxRQUFRLEdBQUcsTUFBTSwwQkFBZ0IsQ0FBQyxhQUFhLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQzlELE9BQU8sUUFBUSxDQUFDO1FBQ2xCLENBQUMsQ0FBQTtLQUNGO0lBQ0QsV0FBVyxFQUFFO1FBQ1gsT0FBTyxFQUFFLENBQU0sTUFBTSxFQUFDLEVBQUU7WUFDdEIsTUFBTSxRQUFRLEdBQUcsTUFBTSw0QkFBa0IsQ0FBQyxlQUFlLENBQUM7Z0JBQ3hELEVBQUUsRUFBRSxNQUFNLENBQUMsU0FBUzthQUNyQixDQUFDLENBQUM7WUFDSCxPQUFPLFFBQVEsQ0FBQztRQUNsQixDQUFDLENBQUE7S0FDRjtJQUNELFFBQVEsRUFBRTtRQUNSLGFBQWEsRUFBRSxDQUFPLENBQUMsRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUU7WUFDcEMsTUFBTSxRQUFRLEdBQUcsTUFBTSw0QkFBa0IsQ0FBQyxrQkFBa0IsbUJBQ3ZELEtBQUssRUFDUixDQUFDO1lBQ0gsT0FBTyxRQUFRLENBQUM7UUFDbEIsQ0FBQyxDQUFBO1FBQ0QsV0FBVyxFQUFFLENBQU8sQ0FBQyxFQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRTtZQUNsQyxNQUFNLFFBQVEsR0FBRyxNQUFNLDBCQUFnQixDQUFDLGdCQUFnQixtQkFDbkQsS0FBSyxFQUNSLENBQUM7WUFDSCxPQUFPLFFBQVEsQ0FBQztRQUNsQixDQUFDLENBQUE7S0FDRjtDQUNGLENBQUM7QUFFTyw4QkFBUyJ9