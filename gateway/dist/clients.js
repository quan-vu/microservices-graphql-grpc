"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productsGrpcClient = exports.ordersGrpcClient = void 0;
const grpc_1 = require("grpc");
const protoLoader = __importStar(require("@grpc/proto-loader"));
const bluebird_1 = require("bluebird");
const ORDERS_SERVICE = process.env.ORDERS_SERVICE || 'orders:50052';
const PRODUCTS_SERVICE = process.env.PRODUCTS_SERVICE || 'products:50051';
const ORDERS_PROTO_PATH = process.env.ORDERS_PROTO_PATH || `${__dirname}/../../protobufs/orders.proto`;
const PRODUCTS_PROTO_PATH = process.env.PRODUCTS_PROTO_PATH || `${__dirname}/../../protobufs/products.proto`;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpZW50cy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9jbGllbnRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrQkFBMEQ7QUFDMUQsZ0VBQWtEO0FBQ2xELHVDQUF3QztBQUV4QyxNQUFNLGNBQWMsR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsSUFBSSxjQUFjLENBQUM7QUFDcEUsTUFBTSxnQkFBZ0IsR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixJQUFJLGdCQUFnQixDQUFDO0FBRTFFLE1BQU0saUJBQWlCLEdBQ3JCLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLElBQUksR0FBRyxTQUFTLCtCQUErQixDQUFDO0FBQy9FLE1BQU0sbUJBQW1CLEdBQ3ZCLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLElBQUksR0FBRyxTQUFTLGlDQUFpQyxDQUFDO0FBRW5GLE1BQU0sdUJBQXVCLEdBQUcsV0FBVyxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsRUFBRTtJQUN0RSxRQUFRLEVBQUUsS0FBSztJQUNmLEtBQUssRUFBRSxNQUFNO0lBQ2IsS0FBSyxFQUFFLE1BQU07SUFDYixRQUFRLEVBQUUsSUFBSTtJQUNkLE1BQU0sRUFBRSxJQUFJO0NBQ2IsQ0FBQyxDQUFDO0FBRUgsTUFBTSx5QkFBeUIsR0FBRyxXQUFXLENBQUMsUUFBUSxDQUFDLG1CQUFtQixFQUFFO0lBQzFFLFFBQVEsRUFBRSxLQUFLO0lBQ2YsS0FBSyxFQUFFLE1BQU07SUFDYixLQUFLLEVBQUUsTUFBTTtJQUNiLFFBQVEsRUFBRSxJQUFJO0lBQ2QsTUFBTSxFQUFFLElBQUk7Q0FDYixDQUFDLENBQUM7QUFFSCxNQUFNLE1BQU0sR0FBUSw0QkFBcUIsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLE1BQU0sQ0FBQztBQUMxRSxNQUFNLFFBQVEsR0FBUSw0QkFBcUIsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDLFFBQVEsQ0FBQztBQUVoRixNQUFNLFVBQVUsR0FBRyxJQUFJLE1BQU0sQ0FBQyxNQUFNLENBQ2xDLEdBQUcsY0FBYyxFQUFFLEVBQ25CLGtCQUFXLENBQUMsY0FBYyxFQUFFLENBQzdCLENBQUM7QUFDRixNQUFNLFlBQVksR0FBRyxJQUFJLFFBQVEsQ0FBQyxRQUFRLENBQ3hDLEdBQUcsZ0JBQWdCLEVBQUUsRUFDckIsa0JBQVcsQ0FBQyxjQUFjLEVBQUUsQ0FDN0IsQ0FBQztBQUVGLE1BQU0sZ0JBQWdCLEdBQVEsdUJBQVksQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUc5Qyw0Q0FBZ0I7QUFGekIsTUFBTSxrQkFBa0IsR0FBUSx1QkFBWSxDQUFDLFlBQVksQ0FBQyxDQUFDO0FBRWhDLGdEQUFrQiJ9