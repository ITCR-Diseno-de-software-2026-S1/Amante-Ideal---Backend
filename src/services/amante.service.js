const repo = require("../repositories/amante.repository");

class AmanteService {
  async crearAmante(data) {
    return await repo.create(data);
  }

  async buscarPorInteres(interes) {
    return await repo.findByInteres(interes);
  }
}

module.exports = new AmanteService();