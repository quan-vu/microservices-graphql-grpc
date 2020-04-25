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

  type OrderItem {
    id: ID!
    product: Product!
    price: Int!
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

export { typeDefs };
