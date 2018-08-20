const seedDB = require("./seed");
const mongoose = require("mongoose");
const { config } = require("../config");
const rawData = require("./testData.json");

mongoose
  .connect(
    config.dev.DB_URL,
    { useNewUrlParser: true }
  )
  .then(() => {
    console.log(`connected to ${config.dev.DB_URL}...`);
    return seedDB(rawData);
  })
  .then(() => {
    return mongoose.disconnect();
  })
  .then(() => {
    console.log(`successfully disconnected from ${config.dev.DB_URL}...`);
  })
  .catch(console.log);
