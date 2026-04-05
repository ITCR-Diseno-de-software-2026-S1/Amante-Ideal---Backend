class CreateAmanteDTO {
  constructor(data) {
    const { nombre, edad, intereses } = data;

    if (!nombre) throw new Error("Nombre requerido");
    if (!edad || edad < 18) throw new Error("Edad inválida");
    if (!Array.isArray(intereses))
      throw new Error("Intereses deben ser lista");

    this.nombre = nombre;
    this.edad = edad;
    this.intereses = intereses;
  }
}

module.exports = CreateAmanteDTO;