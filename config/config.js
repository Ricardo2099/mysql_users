require('dotenv').config();    // para desarrollo local
const express = require('express');
const cors    = require('cors');
const userRoutes = require('../routes');

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

// Rutas usuarios
app.use('/api/users', userRoutes);

// Error handler
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: 'Internal Server Error' });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
