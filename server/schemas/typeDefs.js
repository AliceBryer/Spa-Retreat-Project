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
    treatments: [Treatment]
    user: String
  }

  type Wishlist {
    _id: ID
    treatments: [Treatment]
    user: String
  }

  type Facilities {
    _id: ID
    name: String
    description: String
    pictureURL: String
  }

  type Treatment {
    _id: ID
    name: String
    description: String
    pictureURL: String
    price: Float
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
    facilities: [Facilities]
    treatments: [Treatment]
    user: User
    order(_id: ID!): Order
  }

  type Mutation {
    addUser(
      firstName: String!
      lastName: String!
      email: String!
      password: String!
    ): Auth

    updateUser(
      firstName: String
      lastName: String
      email: String
      password: String
    ): User
    deleteUser(_id: ID!): User
    addTreatment(_id: ID!, name: String, quantity: Int!): Treatment
    updateTreatment(_id: ID!, name: String, quantity: Int!): Treatment
    deleteTreatment(_id: ID!, name: String, quantity: Int!): Treatment
    addOrder(treatment: [ID]!): Order
    updateOrder(_id: ID!, purchaseDate: String, quantity: Int!): Treatment
    login(email: String!, password: String!): Auth
    addTreatmentToWishlist(treatment: [ID]!): Wishlist
  }
`;
module.exports = typeDefs;
