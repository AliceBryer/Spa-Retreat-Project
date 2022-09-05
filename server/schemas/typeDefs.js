const { gql } = require("apollo-server-express");

const typeDefs = gql``;

type Facilities {
    _id: ID
    name: String
}

type Treatment {
    _id :ID
    name: String 
    description: String
    image: String 
    quantity: Int
    price:
}

type Order {
    _id: ID
    purchaseDate: String
    treatment: [Treatment]
}
type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    orders: [Order]
  }
;
module.exports = typeDefs;
