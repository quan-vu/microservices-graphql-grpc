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
exports.resolvers = void 0;
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
            console.log(response);
            return response;
        }),
    },
    OrderItem: {
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
        updateOrder: (_, { input }) => __awaiter(void 0, void 0, void 0, function* () {
            const response = yield clients_1.ordersGrpcClient.updateOrderAsync(Object.assign({}, input));
            return response;
        }),
        deleteOrder: (_, { input }) => __awaiter(void 0, void 0, void 0, function* () {
            const response = yield clients_1.ordersGrpcClient.deleteOrderAsync(Object.assign({}, input));
            console.log(response);
            return response;
        }),
    },
};
exports.resolvers = resolvers;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzb2x2ZXJzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3Jlc29sdmVycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSxtQ0FBbUM7QUFDbkMsdUNBQWlFO0FBRWpFLE1BQU0sTUFBTSxHQUFHLGtCQUFTLENBQUMsV0FBVyxDQUFDLENBQUM7QUFDdEMsTUFBTSxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUM7QUFFdkIsTUFBTSxTQUFTLEdBQUc7SUFDaEIsS0FBSyxFQUFFO1FBQ0wsT0FBTyxFQUFFLENBQU8sQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRTtZQUMzQixNQUFNLFFBQVEsR0FBRyxNQUFNLDRCQUFrQixDQUFDLGVBQWUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFDbEUsT0FBTyxRQUFRLENBQUM7UUFDbEIsQ0FBQyxDQUFBO1FBQ0QsUUFBUSxFQUFFLEdBQVMsRUFBRTtZQUNuQixNQUFNLFFBQVEsR0FBRyxNQUFNLDRCQUFrQixDQUFDLGlCQUFpQixDQUFDLEVBQUcsQ0FBQyxDQUFDO1lBQ2pFLE9BQU8sUUFBUSxDQUFDLFFBQVEsQ0FBQztRQUMzQixDQUFDLENBQUE7UUFDRCxrQkFBa0IsRUFBRSxDQUFPLENBQUMsRUFBRSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsRUFBRSxFQUFFO1lBQ2pELE1BQU0sUUFBUSxHQUFHLE1BQU0sNEJBQWtCLENBQUMsaUJBQWlCLENBQUMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQztZQUMvRSxPQUFPO2dCQUNMLFVBQVUsRUFBRSxRQUFRLENBQUMsVUFBVTtnQkFDL0IsUUFBUSxFQUFFLFFBQVEsQ0FBQyxRQUFRO2FBQzVCLENBQUM7UUFDSixDQUFDLENBQUE7UUFDRCxLQUFLLEVBQUUsQ0FBTyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFO1lBQ3pCLE1BQU0sUUFBUSxHQUFHLE1BQU0sMEJBQWdCLENBQUMsYUFBYSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztZQUM5RCxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFBO1lBQ3JCLE9BQU8sUUFBUSxDQUFDO1FBQ2xCLENBQUMsQ0FBQTtLQUNGO0lBQ0QsU0FBUyxFQUFFO1FBQ1QsT0FBTyxFQUFFLENBQU0sTUFBTSxFQUFDLEVBQUU7WUFDdEIsTUFBTSxRQUFRLEdBQUcsTUFBTSw0QkFBa0IsQ0FBQyxlQUFlLENBQUM7Z0JBQ3hELEVBQUUsRUFBRSxNQUFNLENBQUMsU0FBUzthQUNyQixDQUFDLENBQUM7WUFDSCxPQUFPLFFBQVEsQ0FBQztRQUNsQixDQUFDLENBQUE7S0FDRjtJQUNELFFBQVEsRUFBRTtRQUNSLGFBQWEsRUFBRSxDQUFPLENBQUMsRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUU7WUFDcEMsTUFBTSxRQUFRLEdBQUcsTUFBTSw0QkFBa0IsQ0FBQyxrQkFBa0IsbUJBQ3ZELEtBQUssRUFDUixDQUFDO1lBQ0gsT0FBTyxRQUFRLENBQUM7UUFDbEIsQ0FBQyxDQUFBO1FBQ0QsV0FBVyxFQUFFLENBQU8sQ0FBQyxFQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRTtZQUNsQyxNQUFNLFFBQVEsR0FBRyxNQUFNLDBCQUFnQixDQUFDLGdCQUFnQixtQkFDbkQsS0FBSyxFQUNSLENBQUM7WUFDSCxPQUFPLFFBQVEsQ0FBQztRQUNsQixDQUFDLENBQUE7UUFDRCxXQUFXLEVBQUUsQ0FBTyxDQUFDLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFO1lBQ2xDLE1BQU0sUUFBUSxHQUFHLE1BQU0sMEJBQWdCLENBQUMsZ0JBQWdCLG1CQUNuRCxLQUFLLEVBQ1IsQ0FBQztZQUNILE9BQU8sUUFBUSxDQUFDO1FBQ2xCLENBQUMsQ0FBQTtRQUNELFdBQVcsRUFBRSxDQUFPLENBQUMsRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUU7WUFDbEMsTUFBTSxRQUFRLEdBQUcsTUFBTSwwQkFBZ0IsQ0FBQyxnQkFBZ0IsbUJBQ25ELEtBQUssRUFDUixDQUFDO1lBQ0gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUN0QixPQUFPLFFBQVEsQ0FBQztRQUNsQixDQUFDLENBQUE7S0FDRjtDQUNGLENBQUM7QUFFTyw4QkFBUyJ9