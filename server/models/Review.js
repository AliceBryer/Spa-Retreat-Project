const mongoose = require("mongoose");

const { Schema } = mongoose;

const reviewSchema = new Schema({
  title: {
    type: String,
  },
  name: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
  },
  user: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  treatments: [
    {
      type: Schema.Types.ObjectId,
      ref: "Treatments",
    },
  ],
});

const Review = mongoose.model("Review", reviewSchema);

module.exports = Review;
