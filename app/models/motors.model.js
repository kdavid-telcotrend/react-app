const mongoose = require("mongoose");

const Motors = mongoose.model(
  "Motors",
  new mongoose.Schema({
    name: String,
    type: String,
    consumption: String
  })
);

module.exports = Motors;
