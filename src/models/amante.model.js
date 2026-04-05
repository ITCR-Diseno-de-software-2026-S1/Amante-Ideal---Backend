const mongoose = require("mongoose");

const AmanteSchema = new mongoose.Schema({
  nombre: String,
  edad: Number,
  intereses: [String]
});

module.exports = mongoose.model("Amante", AmanteSchema);