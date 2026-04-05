const Amante = require("../models/amante.model");

class AmanteRepository {
  async create(data) {
    return await Amante.create(data);
  }

  async findByInteres(interes) {
    return await Amante.find({
      intereses: interes
    });
  }
}

module.exports = new AmanteRepository();