const { Users, Home } = require('../models');

const seedDB = userData => {
  return mongoose.connection
    .dropDatabase()
    .then(() => {
      return new Promise(Users.insertMany(userData));
    })
    .catch(console.log);
};

module.exports = seedDB;
