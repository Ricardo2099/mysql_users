const express = require('express');
const router = express.Router();
const { getUsers, postUser } = require('../controllers/userController');

// Ruta GET para obtener todos los usuarios
router.get('/', getUsers);

// Ruta POST para agregar un nuevo usuario
router.post('/', postUser);

module.exports = router;
