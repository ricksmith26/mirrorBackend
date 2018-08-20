const express = require("express");
const mongoose = require("mongoose");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

const { DB_URL } = process.env.DB_URL || require("./config").DB_URL;
app.use(cors());

mongoose.connect(DB_URL).then(() => {
  console.log(`connected to database on ${DB_URL}...`);
});

app.use(bodyParser.json());

module.exports = app;
