const {} = require("../models");

const resolvers = {
  Query: {
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
          currency: "AUD",
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
  },
};

module.exports = resolvers;
