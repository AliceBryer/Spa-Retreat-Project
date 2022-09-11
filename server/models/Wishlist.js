const mongoose = require("mongoose");

const { Schema } = mongoose;

const wishlistSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },

  treatments: [
    {
      type: Schema.Types.ObjectId,
      ref: "Treatments",
    },
  ],
});

const Wishlist = mongoose.model("Wishlist", wishlistSchema);

module.exports = Wishlist;
