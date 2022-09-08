const mongoose = require("mongoose");

const { Schema } = mongoose;

const orderSchema = new Schema({
  purchaseDate: {
    type: Date,
    default: Date.now,
  },

  treatments: [
    {
      type: Schema.Types.ObjectId,
      ref: "Treatments",
    },
  ],
  user: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
