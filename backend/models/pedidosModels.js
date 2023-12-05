/* Modelo - Base de datos */
const db = require('../database');

const getAllPedidos= async () => {
  try {
    const [rows] = await db.query(
      `select * from pedido p 
      inner join cliente c on p.idCliente = c.idCliente 
      inner join localidad l on p.idLocalidad = l.idLocalidad 
      inner join estadopedido e on p.idEstado  = e.idEstado`);
    return rows;
  } catch (err) {
    throw err;
  }
};

const getAllPedidosPorLocalidad= async (idLocalidad) => {
  try {
    const query =   `select * from pedido p 
    inner join cliente c on p.idCliente = c.idCliente 
    inner join localidad l on p.idLocalidad = l.idLocalidad 
    inner join estadopedido e on p.idEstado  = e.idEstado
    where p.idLocalidad = ? `;
    const [rows] = await db.query(query, [idLocalidad]);
    return rows;

  } catch (err) {
    throw err;
  }
};



//actualizar

const updatePedido = async (idEstado,idPedido) => {
  try {
    const query = 'UPDATE pedido set idestado= ? where idPedido = ?';
    await db.query(query, [idEstado, idPedido]);
  } catch (err) {
    throw err;
  }
};

module.exports = {
  getAllPedidos,
  updatePedido,
  getAllPedidosPorLocalidad
  // Otros métodos para crear, actualizar o eliminar usuarios, por ejemplo.
};
