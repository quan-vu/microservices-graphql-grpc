"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const productQueries = `
mutation createProduct {
  createProduct(
    input: {
      name: "Iphone 9",
      slug: "iphone-9",
      thumbnail: "https://bachlongmobile.com/media/catalog/product/cache/2/image/040ec09b1e35df139433887a97daa66f/i/p/iphone8-red-select-2018_6.jpg",
      description: "Iphone 8",
      price: 500000,
      inStock: 55
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
  
query getProducts{
  products{
      id
      name
      slug
      thumbnail
      description
      price
      inStock
  }
}

query getproductsPagination{
  productsPagination (first:2, offset:5){
    totalCount
    products {
      id
      name
      slug
      thumbnail
      description
      price
      inStock
    }
  }
}

query getProduct {
  product(id: 1) {
    id
    name
    slug
    thumbnail
    description
    price
    inStock
  }
}

`;
const orderQueries = `
mutation createOrder {
  createOrder(
    input: {
      orderItems: [
        {
          productId: 10,
          price: 15000999,
          quantity: 123
        },
        {
          productId: 11,
          price: 200000,
          quantity: 123
      	}
      ]
    }
  ) {
    orderItems {
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

query getOrder{
  order(id: 2){
    id
    orderItems{
      id 
      price
      quantity
      product{
        id 
        name
        inStock
      }
      
    }
  }
}

query getOrders{
  orders{
    id
    orderItems{
      id
      quantity
      price
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVlcmllcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9xdWVyaWVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsTUFBTSxjQUFjLEdBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0E2RHRCLENBQUM7QUFFRixNQUFNLFlBQVksR0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0E4RHBCLENBQUM7QUFFRixNQUFNLGNBQWMsR0FBRyxXQUFXLENBQUMsRUFBRTtJQUNuQyxPQUFPO1FBQ0w7WUFDRSxRQUFRLEVBQUUsR0FBRyxXQUFXLEVBQUU7WUFDMUIsSUFBSSxFQUFFLFVBQVU7WUFDaEIsS0FBSyxFQUFFLGNBQWM7U0FDdEI7UUFDRDtZQUNFLFFBQVEsRUFBRSxHQUFHLFdBQVcsRUFBRTtZQUMxQixJQUFJLEVBQUUsUUFBUTtZQUNkLEtBQUssRUFBRSxZQUFZO1NBQ3BCO0tBQ0YsQ0FBQztBQUNKLENBQUMsQ0FBQztBQUVPLHdDQUFjIn0=