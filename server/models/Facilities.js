const mongoose = require("mongoose");

const { Schema } = mongoose;

const facilitiesSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
  },
  pictureURL: {
    type: String,
  },
});

const Facilities = mongoose.model("Facilities", facilitiesSchema);

module.exports = Facilities;
