const { User } = require('../models');  // Importar el modelo de usuario

// Función para obtener todos los usuarios
const getUsers = async (req, res) => {
  try {
    console.log('Conectando a la base de datos...');
    const users = await User.findAll();  // Intentamos obtener todos los usuarios
    if (users.length === 0) {
      return res.status(404).json({ error: 'No se encontraron usuarios' });  // Si no hay usuarios
    }
    res.status(200).json(users);  // Responder con los usuarios
  } catch (error) {
    console.error('Error al obtener los usuarios:', error);  // Para ver el error completo
    res.status(500).json({ error: 'Error al obtener los usuarios' });
  }
};

// Función para agregar un nuevo usuario
const postUser = async (req, res) => {
  try {
    const { name, email, age, comments } = req.body;
    const user = await User.create({ name, email, age, comments });  // Crear un nuevo usuario
    res.status(201).json(user);  // Responder con el nuevo usuario
  } catch (error) {
    console.error('Error al agregar el usuario:', error);  // Para ver el error completo
    res.status(500).json({ error: 'Error al agregar el usuario' });
  }
};

module.exports = { getUsers, postUser };
