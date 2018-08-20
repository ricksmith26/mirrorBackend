const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    requied: true
  },
  ScreenName: {
    type: String,
    required: true
  },
  WorkStreetNo: {
    type: String,
    required: true
  },
  street: {
    type: String,
    requied: true
  },
  City: {
    type: String,
    required: true
  },
  Postcode: {
    type: String,
    required: true
  },
  authentication: {
    type: Array,
    required: true
  }
});

module.exports = mongoose.model('users', UserSchema);
