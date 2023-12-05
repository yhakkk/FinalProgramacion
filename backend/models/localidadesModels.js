/* Modelo - Base de datos */
const db = require('../database');

const getAllLocalidades = async () => {
  try {
    const [rows] = await db.query('SELECT * FROM localidad order by nombreLocalidad');
    return rows;
  } catch (err) {
    throw err;
  }
};


module.exports = {
  getAllLocalidades
  // Otros métodos para crear, actualizar o eliminar usuarios, por ejemplo.
};
