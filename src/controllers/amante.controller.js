const service = require("../services/amante.service");
const CreateAmanteDTO = require("../dtos/createAmante.dto");

exports.create = async (req, res) => {
  try {
    const dto = new CreateAmanteDTO(req.body);
    const amante = await service.crearAmante(dto);
    res.status(201).json(amante);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getByInteres = async (req, res) => {
  const { interes } = req.query;
  const result = await service.buscarPorInteres(interes);
  res.json(result);
};