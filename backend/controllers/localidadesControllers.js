


const localidadModel = require('../models/localidadesModels');


const getAllLocalidades = async (req, res) => {
  try {
    const localidades = await localidadModel.getAllLocalidades();
    res.json(localidades);
  } catch (err) {
    res.status(500).json({ error: 'Error al obtener Localidades.' });
  }
};


module.exports = {

  getAllLocalidades
  // Otros métodos para crear, actualizar o eliminar usuarios, por ejemplo.
};
