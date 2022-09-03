const mongoose = require("mongoose");

const { Schema } = mongoose;

const facilitiesSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  imageURL: {
    type: String,
  },
});

const Product = mongoose.model("Facilities", facilitiesSchema);

module.exports = Facilities;
