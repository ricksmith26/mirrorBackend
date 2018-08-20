const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  screenName: {
    type: String,
    required: true
  },
  workStreetNo: {
    type: String,
    required: true
  },
  street: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  postcode: {
    type: String,
    required: true
  },
  authentication: {
    type: Array,
    required: true
  }
});

module.exports = mongoose.model("users", UserSchema);
