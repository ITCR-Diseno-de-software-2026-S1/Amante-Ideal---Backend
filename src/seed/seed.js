const Amante = require("../models/amante.model");

module.exports = async () => {
  const count = await Amante.countDocuments();

  if (count === 0) {
    await Amante.insertMany([
      { nombre: "Ana", edad: 25, intereses: ["cine", "viajar"] },
      { nombre: "Luis", edad: 30, intereses: ["musica", "deporte"] }
    ]);

    console.log("Seed cargado");
  }
};