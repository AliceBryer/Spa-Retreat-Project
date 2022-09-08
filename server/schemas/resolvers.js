const { User, Wishlist, Review, Order, Facilities} = require("../models");
const { AuthenticationError } = require("apollo-server-express");
const { Order } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    Treatment: async () => {
      return await Treatment.find();
    },
    Treatment: async (parent, { Treatment, name }) => {
      const params = {};

      if (Treatment) {
        params.treatment= Treatment;
      }

      if (name) {
        params.name = {
          $regex: name
        };
      }

      return await Treatment.find(params).populate('treatment');
    },
    Treatment: async (parent, { _id }) => {
      return await Treatment.findById(_id).populate('treatment');
    },
    user: async (parent, args, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id).populate({
          path: 'orders.treatment',
          populate: 'treatment'
        });

        user.orders.sort((a, b) => b.purchaseDate - a.purchaseDate);

        return user;
      }

      throw new AuthenticationError('Not logged in');
    },
    order: async (parent, { _id }, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id).populate({
          path: 'orders.treatment',
          populate: 'treatment'
        });

        return user.orders.id(_id);
      }

      throw new AuthenticationError('Not logged in');
    },
    checkout: async (parent, args, context) => {
      const url = new URL(context.headers.referer).origin;
      const order = new Order({ treatment: args.treatment });
      const line_items = [];
      const { products } = await order.populate('treatment');

    }
  },

  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    addOrder: async (parent, { products }, context) => {
      console.log(context);
      if (context.user) {
        console.log(products);
        const order = new Order({ products })

        await User.findByIdAndUpdate(context.user._id, { $push: { orders: order } });

        return order;
      }

      throw new AuthenticationError('Not logged in');
    },
    updateUser: async (parent, args, context) => {
      if (context.user) {
        return await User.findByIdAndUpdate(context.user._id, args, { new: true });
      }

      throw new AuthenticationError('Not logged in');
    },
    updateTreatment: async (parent, { _id, quantity }) => {
      const decrement = Math.abs(quantity) * -1;

      return await Product.findByIdAndUpdate(_id, { $inc: { quantity: decrement } }, { new: true });
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    }
  }
};



module.exports = resolvers;
