const mongoose = require("mongoose");

const Autos = mongoose.model(
  "Autos",
  new mongoose.Schema({
    name: String,
    type: String,
    consumption: String
  })
);

module.exports = Autos;
