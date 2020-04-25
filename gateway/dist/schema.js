"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_1 = require("apollo-server");
const typeDefs = apollo_server_1.gql `
  type Product {
    id: ID!
    name: String!
    slug: String!
    thumbnail: String!
    description: String!
    price: Int!
    inStock: Int!
  }

  type ProductPaginationResponse {
    totalCount: Int!
    products: [Product]
  }

  type OrderItem {
    id: ID!
    product: Product!
    price: String!
    quantity: Int!
  }

  type Order {
    id: ID!
    orderItems: [OrderItem]!
  }

  type Query {
    productsPagination(first: Int, offset: Int): ProductPaginationResponse
    products: [Product]
    product(id: ID!): Product
    order(id: ID!): Order
    orders: [Order]
  }

  input ProductInput {
    name: String
    slug: String!
    thumbnail: String!
    description: String!
    price: Int
    inStock: Int
  }

  input OrderItemsInput {
    productId: Int!
    price: Int!
    quantity: Int!
  }

  input OrderInput {
    orderItems: [OrderItemsInput]!
  }

  type Mutation {
    createProduct(input: ProductInput!): Product!
    createOrder(input: OrderInput!): Order!
  }
`;
exports.typeDefs = typeDefs;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3NjaGVtYS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLGlEQUFvQztBQUVwQyxNQUFNLFFBQVEsR0FBRyxtQkFBRyxDQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQTJEbkIsQ0FBQztBQUVPLDRCQUFRIn0=