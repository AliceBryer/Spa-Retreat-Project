const { gql } = require("apollo-server-express");

const typeDefs = gql`
type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    orders: [Order]
  }

type Order {
        _id: ID
        purchaseDate: String
        treatment: [Treatment]
      }

type Facilities {
        _id: ID
        name: String
        description: String
        pictureurl: String
        price: Float
}      
type Treatments {
  _id: ID
  name: String
  description: String
  pictureurl: String
  price: Float
  quantity: Integer
}   
`;


module.exports = typeDefs;
