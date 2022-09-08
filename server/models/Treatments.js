const mongoose = require("mongoose");

const { Schema } = mongoose;

const TreatmentsSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  price: {
    type: Number,
    required: true,
    min: 0.99,
  },
  pictureURL: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },
});

const Treatments = mongoose.model("Treatments", TreatmentsSchema);

module.exports = Treatments;
