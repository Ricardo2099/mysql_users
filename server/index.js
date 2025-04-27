require('dotenv').config();  // Cargar las variables de entorno

const express = require('express');
const cors = require('cors');
const userRoutes = require('../routes');  // Rutas de usuarios

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());  // Habilitar CORS
app.use(express.json());  // Parsear solicitudes JSON

// Usar rutas de usuarios
app.use('/api/users', userRoutes);

// Manejo de errores global
app.use((err, req, res, next) => {
  console.error(err);  // Imprimir el error en la consola
  res.status(500).json({ error: 'Internal Server Error' });  // Responder con un error genérico
});

// Iniciar el servidor y manejar errores
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
}).on('error', (err) => {
  console.error('Error al iniciar el servidor:', err);
});
