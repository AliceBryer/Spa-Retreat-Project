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

  type Query {
    Facilities: [Facilities]
    treatment (facilities: ID, name: String): [Treatment]
    treatment (_id: ID!): Treatment
    user: User
    order(_id: ID!): Order
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    updateUser(firstName: String, lastName: String, email: String, password: String): User
    addTreatment (_id: ID!, name:String, quantity: Int!): Treatment
    updateTreatment(_id: ID!, name:String, quantity: Int!): Treatment 
    deleteTreatment(_id: ID!, name:String, quantity: Int!): Treatment 
    addOrder(treatment: [ID]!): Order
    updateOrder(_id: ID!, purchaseDate:String, quantity: Int!): Treatment
    login(email: String!, password: String!): Auth
  }
;
module.exports = typeDefs;
