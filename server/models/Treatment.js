const mongoose = require("mongoose");

const { Schema } = mongoose;

const TreatmentSchema = new Schema({
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
  pictureurl: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },
});

const Treatments = mongoose.model("Treatment", TreatmentSchema);

module.exports = Treatments;
