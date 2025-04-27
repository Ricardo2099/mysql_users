require('dotenv').config();  // Asegúrate de cargar las variables de entorno desde .env

console.log('DB_USER:', process.env.DB_USER);  // Verifica que la variable se cargue correctamente
console.log('DB_PASSWORD:', process.env.DB_PASSWORD);  // Asegúrate de que esta esté bien
console.log('DB_NAME:', process.env.DB_NAME);
console.log('DB_HOST:', process.env.DB_HOST);
console.log('DB_DIALECT:', process.env.DB_DIALECT);

// Configuración de Sequelize
module.exports = {
  development: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT || 'mysql',  // Valor por defecto si no está definida
  },
  test: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: "user-api-test",
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT || 'mysql',
  },
  production: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: "user-api-prod",
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT || 'mysql',
  },
};
