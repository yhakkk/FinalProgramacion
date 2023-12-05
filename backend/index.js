const express = require('express');
const app = express();
const db = require('./database');
const cors = require("cors"); // Importa el módulo cors

// Habilita CORS para todas las rutas, con esta sentencia permite todo
app.use(cors());

// Middleware para parsear JSON y URL-encoded bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rutas

const localidadRoutes = require('./routes/localidadesRoutes');
const pedidoRoutes = require('./routes/pedidosRoutes');


app.use('/api/localidad', localidadRoutes);
app.use('/api/pedido', pedidoRoutes);


// Puerto para escuchar las peticiones
const port = 3000;
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});

