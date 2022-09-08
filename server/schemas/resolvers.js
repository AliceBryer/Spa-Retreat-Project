const {} = require("../models");

const resolvers = {
  Query: {},

  Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    updateUser(firstName: String, lastName: String, email: String, password: String): User
    addTreatment (_id: ID!, name:String, quantity: Int!): Treatment
    updateTreatment(_id: ID!, name:String, quantity: Int!): Treatment 
    deleteTreatment(_id: ID!, name:String, quantity: Int!): Treatment 
    addOrder(treatment: [ID]!): Order
    updateOrder(_id: ID!, purchaseDate:String, quantity: Int!): Treatment
    login(email: String!, password: String!): Auth
  }

  },
};


module.exports = resolvers;
