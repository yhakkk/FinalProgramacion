const express = require('express');
const router = express.Router();
const pedidoController = require('../controllers/pedidosControllers');

// Ruta para obtener todos los usuarios
router.get('/', pedidoController.getAllPedidos);

router.get('/busqueda/:idLocalidad', pedidoController.getAllPedidosPorLocalidad);

router.put('/', pedidoController.updateEstadoPedido);

module.exports = router;

