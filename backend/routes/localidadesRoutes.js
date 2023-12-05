const express = require('express');
const router = express.Router();
const localidadController = require('../controllers/localidadesControllers');

// Ruta para obtener todos los usuarios
router.get('/', localidadController.getAllLocalidades);

module.exports = router;

