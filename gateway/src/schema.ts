import { gql } from 'apollo-server';

const typeDefs = gql`
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

  type OrderDetail {
    id: ID!
    product: Product!
    price: String!
    quantity: Int!
  }

  type Order {
    id: ID!
    orderDetails: [OrderDetail]!
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

  input OrderDetailsInput {
    productId: String!
    price: String!
    quantity: Int!
  }

  input OrderInput {
    orderDetails: [OrderDetailsInput]!
  }

  type Mutation {
    createProduct(input: ProductInput!): Product!
    createOrder(input: OrderInput!): Order!
  }
`;

export { typeDefs };
