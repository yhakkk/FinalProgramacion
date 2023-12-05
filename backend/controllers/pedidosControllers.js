const pedidoModel = require('../models/pedidosModels');


const getAllPedidos = async (req, res) => {
    try {
      const pedidos = await pedidoModel.getAllPedidos();
      res.json(pedidos);
    } catch (err) {
      res.status(500).json({ error: 'Error al obtener Pedidos.' });
    }
  };

  const getAllPedidosPorLocalidad = async (req, res) => {
    try {
      const idLocalidad = req.params.idLocalidad;
      const pedidos = await pedidoModel.getAllPedidosPorLocalidad(idLocalidad);
      if (!pedidos) {
        return res.status(404).json({ message: 'Pedido no encontrado.' });
      }
      res.json(pedidos);
    } catch (err) {
      res.status(500).json({ error: 'Error al obtener el Pedido.' });
    }
  };
  
  const updateEstadoPedido = async (req, res) => {
    try {
      const { idEstado,idPedido } = req.body;
      await pedidoModel.updatePedido(idEstado,idPedido);
      res.status(201).json({ message: 'Pedido Actualizado exitosamente.' });
    } catch (err) {
      res.status(500).json({ error: 'Error al actualizar el Pedido.' });
    }
  };
  
  

  module.exports = {
    getAllPedidos,
    getAllPedidosPorLocalidad,
    updateEstadoPedido
    // Otros métodos para crear, actualizar o eliminar usuarios, por ejemplo.
  };