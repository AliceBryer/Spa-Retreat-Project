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
    treatments: [Treatments]
  }

  type Facilities {
    _id: ID
    name: String
    description: String
    pictureURL: String
    price: Float
  }
  type Treatments {
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
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(name: String!, email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
