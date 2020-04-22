"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const grpc_1 = require("grpc");
const protoLoader = __importStar(require("@grpc/proto-loader"));
const bluebird_1 = require("bluebird");
const ORDERS_SERVICE = process.env.ORDERS_SERVICE || 'localhost:50052';
const PRODUCTS_SERVICE = process.env.PRODUCTS_SERVICE || 'localhost:50051';
const ORDERS_PROTO_PATH = process.env.ORDERS_PROTO_PATH || `${__dirname}/../../proto/orders.proto`;
const PRODUCTS_PROTO_PATH = process.env.PRODUCTS_PROTO_PATH || `${__dirname}/../../proto/products.proto`;
const ordersPackageDefinition = protoLoader.loadSync(ORDERS_PROTO_PATH, {
    keepCase: false,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true,
});
const productsPackageDefinition = protoLoader.loadSync(PRODUCTS_PROTO_PATH, {
    keepCase: false,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true,
});
const orders = grpc_1.loadPackageDefinition(ordersPackageDefinition).orders;
const products = grpc_1.loadPackageDefinition(productsPackageDefinition).products;
const ordersStub = new orders.orders(`${ORDERS_SERVICE}`, grpc_1.credentials.createInsecure());
const productsStub = new products.products(`${PRODUCTS_SERVICE}`, grpc_1.credentials.createInsecure());
const ordersGrpcClient = bluebird_1.promisifyAll(ordersStub);
exports.ordersGrpcClient = ordersGrpcClient;
const productsGrpcClient = bluebird_1.promisifyAll(productsStub);
exports.productsGrpcClient = productsGrpcClient;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpZW50cy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9jbGllbnRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLCtCQUEwRDtBQUMxRCxnRUFBa0Q7QUFDbEQsdUNBQXdDO0FBRXhDLE1BQU0sY0FBYyxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxJQUFJLGlCQUFpQixDQUFDO0FBQ3ZFLE1BQU0sZ0JBQWdCLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsSUFBSSxpQkFBaUIsQ0FBQztBQUUzRSxNQUFNLGlCQUFpQixHQUNyQixPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixJQUFJLEdBQUcsU0FBUywyQkFBMkIsQ0FBQztBQUMzRSxNQUFNLG1CQUFtQixHQUN2QixPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixJQUFJLEdBQUcsU0FBUyw2QkFBNkIsQ0FBQztBQUUvRSxNQUFNLHVCQUF1QixHQUFHLFdBQVcsQ0FBQyxRQUFRLENBQUMsaUJBQWlCLEVBQUU7SUFDdEUsUUFBUSxFQUFFLEtBQUs7SUFDZixLQUFLLEVBQUUsTUFBTTtJQUNiLEtBQUssRUFBRSxNQUFNO0lBQ2IsUUFBUSxFQUFFLElBQUk7SUFDZCxNQUFNLEVBQUUsSUFBSTtDQUNiLENBQUMsQ0FBQztBQUVILE1BQU0seUJBQXlCLEdBQUcsV0FBVyxDQUFDLFFBQVEsQ0FBQyxtQkFBbUIsRUFBRTtJQUMxRSxRQUFRLEVBQUUsS0FBSztJQUNmLEtBQUssRUFBRSxNQUFNO0lBQ2IsS0FBSyxFQUFFLE1BQU07SUFDYixRQUFRLEVBQUUsSUFBSTtJQUNkLE1BQU0sRUFBRSxJQUFJO0NBQ2IsQ0FBQyxDQUFDO0FBRUgsTUFBTSxNQUFNLEdBQVEsNEJBQXFCLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxNQUFNLENBQUM7QUFDMUUsTUFBTSxRQUFRLEdBQVEsNEJBQXFCLENBQUMseUJBQXlCLENBQUMsQ0FBQyxRQUFRLENBQUM7QUFFaEYsTUFBTSxVQUFVLEdBQUcsSUFBSSxNQUFNLENBQUMsTUFBTSxDQUNsQyxHQUFHLGNBQWMsRUFBRSxFQUNuQixrQkFBVyxDQUFDLGNBQWMsRUFBRSxDQUM3QixDQUFDO0FBQ0YsTUFBTSxZQUFZLEdBQUcsSUFBSSxRQUFRLENBQUMsUUFBUSxDQUN4QyxHQUFHLGdCQUFnQixFQUFFLEVBQ3JCLGtCQUFXLENBQUMsY0FBYyxFQUFFLENBQzdCLENBQUM7QUFFRixNQUFNLGdCQUFnQixHQUFRLHVCQUFZLENBQUMsVUFBVSxDQUFDLENBQUM7QUFHOUMsNENBQWdCO0FBRnpCLE1BQU0sa0JBQWtCLEdBQVEsdUJBQVksQ0FBQyxZQUFZLENBQUMsQ0FBQztBQUVoQyxnREFBa0IifQ==