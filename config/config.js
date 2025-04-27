require('dotenv').config();

// Sólo exporta las credenciales para Sequelize
module.exports = {
  development: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host:     process.env.DB_HOST,
    port:     process.env.DB_PORT,
    dialect:  process.env.DB_DIALECT || 'mysql',
  },
  test: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: 'user-api-test',
    host:     process.env.DB_HOST,
    port:     process.env.DB_PORT,
    dialect:  process.env.DB_DIALECT || 'mysql',
  },
  production: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: 'user-api-prod',
    host:     process.env.DB_HOST,
    port:     process.env.DB_PORT,
    dialect:  process.env.DB_DIALECT || 'mysql',
  },
};
