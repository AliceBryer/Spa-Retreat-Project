const { User, Wishlist, Review, Order, Facilities } = require("../models");
const { AuthenticationError } = require("apollo-server-express");
const { Order } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate("wishlist");
      }
      throw new AuthenticationError("You need to be logged in!");
    },

    facilities: async () => {
      return await facilities.find();
    },

    treatments: async (parent, { facilities, name }) => {
      const params = {};

      if (facilities) {
        params.facilities = facilities;
      }

      if (name) {
        params.name = {
          $regex: name,
        };
      }
      return await treatment.find(params).populate("facilities");
    },

    treatment: async (parent, { _id }) => {
      return await treatment.findById(_id).populate("facilities");
    },

    user: async (parent, args, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id).populate({
          path: "orders.treatments",
          populate: "facilities",
        });

        user.orders.sort((a, b) => b.purchaseDate - a.purchaseDate);

        return user;
      }

      throw new AuthenticationError("Not logged in");
    },

    order: async (parent, { _id }, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id).populate({
          path: "orders.treatments",
          populate: "facilities",
        });

        return user.orders.id(_id);
      }

      throw new AuthenticationError("Not logged in");
    },

    checkout: async (parent, args, context) => {
      const url = new URL(context.headers.referer).origin;
      const order = new Order({ treatments: args.treatments });
      const line_items = [];
      const { treatments } = await order.populate("treatments");
      // check !
      for (let i = 0; i < treatments.length; i++) {
        const treatment = await stripe.treatments.create({
          name: treatments[i].name,
          description: treatments[i].description,
          images: [`${url}/images/${treatments[i].image}`],
        });

        const price = await stripe.prices.create({
          treatment: treatment.id,
          unit_amount: treatments[i].price * 100,
          currency: "GBP",
        });

        line_items.push({
          price: price.id,
          quantity: 1,
        });
      }

      const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items,
        mode: "payment",
        success_url: `${url}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${url}/`,
      });

      return { session: session.id };
    },

    Mutation: {
      addUser: async (parent, { name, email, password }) => {
        const user = await User.create({ name, email, password });
        const token = signToken(user);
        return { token, user };
      },

      addOrder: async (parent, { products }, context) => {
        console.log(context);
        if (context.user) {
          console.log(products);
          const order = new Order({ products });

          await User.findByIdAndUpdate(context.user._id, {
            $push: { orders: order },
          });

          return order;
        }

        throw new AuthenticationError("Not logged in");
      },

      updateUser: async (parent, args, context) => {
        if (context.user) {
          return await User.findByIdAndUpdate(context.user._id, args, {
            new: true,
          });
        }

        throw new AuthenticationError("Not logged in");
      },

      updateTreatment: async (parent, { _id, quantity }) => {
        const decrement = Math.abs(quantity) * -1;

        return await Product.findByIdAndUpdate(
          _id,
          { $inc: { quantity: decrement } },
          { new: true }
        );
      },

      login: async (parent, { email, password }) => {
        const user = await User.findOne({ email });

        if (!user) {
          throw new AuthenticationError("Incorrect credentials");
        }

        const correctPw = await user.isCorrectPassword(password);

        if (!correctPw) {
          throw new AuthenticationError("Incorrect credentials");
        }

        const token = signToken(user);

        return { token, user };
      },
    },
  },
};

module.exports = resolvers;
