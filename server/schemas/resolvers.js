const {
  User,
  Wishlist,
  Review,
  Order,
  Facilities,
  Treatments,
} = require("../models");
const { AuthenticationError } = require("apollo-server-express");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate(Wishlist);
      }
      throw new AuthenticationError("You need to be logged in!");
    },

    // get all facilities
    facilities: async () => {
      return await Facilities.find();
    },

    // get all treatments
    treatments: async () => {
      return await Treatments.find();
    },

    //  get user
    user: async (parent, args, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id).populate({
          path: "Order.treatments",
          populate: "facilities",
        });
        user.orders.sort((a, b) => b.purchaseDate - a.purchaseDate);
        return user;
      }
      throw new AuthenticationError("Not logged in");
    },

    // get order
    order: async (parent, { _id }, context) => {
      if (context.user) {
        console.log("HEREE");
        const order = await Order.findById(_id);
        console.log(order);
        return order;
      }
      throw new AuthenticationError("Not logged in");
    },

    // get wishlist
    wishlist: async (parent, { _id }, context) => {
      if (context.user) {
        const wishlistData = await Wishlist.findById(_id);
        console.log(wishlistData);
        return wishlistData;
      }
      throw new AuthenticationError("Not logged in");
    },

    // checkout: async (parent, args, context) => {
    //   const url = new URL(context.headers.referer).origin;
    //   const order = new Order({ treatments: args.treatments });
    //   const line_items = [];
    //   const { treatments } = await order.populate("treatments");
    //   // check !
    //   for (let i = 0; i < treatments.length; i++) {
    //     const treatment = await stripe.treatments.create({
    //       name: treatments[i].name,
    //       description: treatments[i].description,
    //       images: [`${url}/images/${treatments[i].image}`],
    //     });
    //     const price = await stripe.prices.create({
    //       treatment: treatment.id,
    //       unit_amount: treatments[i].price * 100,
    //       currency: "GBP",
    //     });
    //     line_items.push({
    //       price: price.id,
    //       quantity: 1,
    //     });
    //   }
    //   const session = await stripe.checkout.sessions.create({
    //     payment_method_types: ["card"],
    //     line_items,
    //     mode: "payment",
    //     success_url: `${url}/success?session_id={CHECKOUT_SESSION_ID}`,
    //     cancel_url: `${url}/`,
    //   });
    //   return { session: session.id };
  },

  Mutation: {
    // login
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });
      if (!user) {
        throw new AuthenticationError("No user found with this email address");
      }
      const correctPw = await user.isCorrectPassword(password);
      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }
      const token = signToken(user);
      return { token, user };
    },

    // add user
    addUser: async (parent, { firstName, lastName, email, password }) => {
      const user = await User.create({ firstName, lastName, email, password });
      const token = signToken(user);
      return { token, user };
    },

    // update user
    updateUser: async (parent, args, context) => {
      if (context.user) {
        return await User.findByIdAndUpdate(context.user._id, args, {
          new: true,
        });
      }
      throw new AuthenticationError("Not logged in");
    },

    // delete user
    deleteUser: async (parent, { _id }) => {
      return User.findOneAndDelete({ _id });
    },

    // no need for now:
    // add treatment
    // update treatment
    // del treatment
    // for typeDefs (if useful):
    // addTreatment(_id: ID!, name: String, quantity: Int!): Treatment
    // updateTreatment(_id: ID!, name: String, quantity: Int!): Treatment
    // deleteTreatment(_id: ID!, name: String, quantity: Int!): Treatment

    // add order
    addOrder: async (parent, { treatment }, context) => {
      if (context.user) {
        console.log(treatment);
        const order = await Order.create({
          treatments: treatment,
          user: context.user._id,
        });
        return order.populate("treatments");
      }
      throw new AuthenticationError("Not logged in");
    },

    // update order
    updateOrder: async (parent, { _id, purchaseDate }, context) => {
      if (context.user) {
        return await Order.findByIdAndUpdate(
          _id,
          { purchaseDate },
          { new: true }
        );
      }
      throw new AuthenticationError("Not logged in");
    },

    // del order
    deleteOrder: async (parent, { _id }, context) => {
      if (context.user) {
        return await Order.findByIdAndDelete(_id);
      }
      return new AuthenticationError("Not logged in");
    },

    // add treatment to wishlist
    addTreatmentToWishlist: async (parent, { treatment }, context) => {
      if (context.user) {
        console.log(treatment);
        const wishlistData = await Wishlist.create({
          treatments: treatment,
          user: context.user._id,
        });
        return wishlistData.populate("treatments");
      }
      throw new AuthenticationError("Not logged in");
    },

    // remove treatment from wishlist old version
    // removeTreatmentFromWishlist: async (parent, { treatment }, context) => {
    //   if (context.user) {
    //     console.log(treatment);
    //     const wishlistData = await Wishlist.findOneAndDelete({
    //       treatments: treatment,
    //       user: context.user._id,
    //     });
    //     return wishlistData.populate("treatments");
    //   }
    //   throw new AuthenticationError("Not logged in");
    // },

    // remove treatment from wishlist
    // TODO: can remove one treatment from wishlist by treatment id
    removeTreatmentFromWishlist: async (parent, { treatment }, context) => {
      if (context.user) {
        console.log(treatment);
        const wishlistData = await Wishlist.findOneAndRemove(
          { $pull: { treatments: treatment } },
          { user: context.user._id }
        );
        return wishlistData.populate("treatments");
      }
      throw new AuthenticationError("Not logged in");
    },

    // BONUS: add review
    // addReview: async (parent, { review }, context) => {
    //   if (context.user) {
    //     console.log(review);
    //     const reviewData = await Review.create({
    //       review: review,
    //       user: context.user._id,
    //     });
    //     return reviewData.populate("review");
    //   }
    //   throw new AuthenticationError("Not logged in");
    // },
  },
};

module.exports = resolvers;
