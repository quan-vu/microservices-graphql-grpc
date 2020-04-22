"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const productQueries = `mutation CreateProduct {
  createProduct(
    input: {
      name: "Iphon 8",
      slug: "iphone-8",
      thumbnail: "https://bachlongmobile.com/media/catalog/product/cache/2/image/040ec09b1e35df139433887a97daa66f/i/p/iphone8-red-select-2018_6.jpg",
      description: "Iphone 8",
      price: 250000,
      inStock: 100
    }
  ) {
    id
    name
    slug
    thumbnail
    description
    price
    inStock
  }
}

query GetProduct {
  product(id: 1) {
    id
    name
    slug
    thumbnail
    description
    price
    inStock
  }
}`;
const orderQueries = `mutation CreateOrder {
  createOrder(
    input: {
      orderDetails: {
        productId: 1,
        price: "105.99",
        quantity: 123
      }
    }
  ) {
    id
    orderDetails {
      id
      product {
        id
        name
        slug
        thumbnail
        description
        price
        inStock
      }
      price
      quantity
    }
  }
}

query GetOrder {
  order(id: 1) {
    id
    orderDetails {
      id
      product {
        id
        name
        slug
        thumbnail
        description
        price
        inStock
      }
      price
      quantity
    }
  }
}
`;
const exampleQueries = graphqlPath => {
    return [
        {
            endpoint: `${graphqlPath}`,
            name: 'Products',
            query: productQueries,
        },
        {
            endpoint: `${graphqlPath}`,
            name: 'Orders',
            query: orderQueries,
        },
    ];
};
exports.exampleQueries = exampleQueries;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVlcmllcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9xdWVyaWVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsTUFBTSxjQUFjLEdBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUErQnJCLENBQUM7QUFFSCxNQUFNLFlBQVksR0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0ErQ3BCLENBQUM7QUFFRixNQUFNLGNBQWMsR0FBRyxXQUFXLENBQUMsRUFBRTtJQUNuQyxPQUFPO1FBQ0w7WUFDRSxRQUFRLEVBQUUsR0FBRyxXQUFXLEVBQUU7WUFDMUIsSUFBSSxFQUFFLFVBQVU7WUFDaEIsS0FBSyxFQUFFLGNBQWM7U0FDdEI7UUFDRDtZQUNFLFFBQVEsRUFBRSxHQUFHLFdBQVcsRUFBRTtZQUMxQixJQUFJLEVBQUUsUUFBUTtZQUNkLEtBQUssRUFBRSxZQUFZO1NBQ3BCO0tBQ0YsQ0FBQztBQUNKLENBQUMsQ0FBQztBQUVPLHdDQUFjIn0=