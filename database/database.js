const Sequelize = require('sequelize');

const connection = new Sequelize('plataforma', 'root', '123456', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = connection;
