const { Users, Home } = require("../models");
const mongoose = require("mongoose");
mongoose.Promise = Promise;

const seedDB = userData => {
  return mongoose.connection
    .dropDatabase()
    .then(() => {
      return Users.insertMany(userData);
    })
    .catch(console.log);
};

module.exports = seedDB;
