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
  User: [
    {
      type: Schema.Types.UserId,
      ref: "UserId",
    },
  ],
  treatments: [
    {
      type: Schema.Types.TreatmentId,
      ref: "Treatments",
    },
  ],
});

const Review = mongoose.model("Review", reviewSchema);

module.exports = Review;
