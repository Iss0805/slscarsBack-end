const Sequelize = require('sequelize');
const connection = require('../database/databaseSlscars');

const modelUsuarios = connection.define(
  'clientes',
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    nome_cliente: {
      type: Sequelize.STRING(255),
      allowNull: false
    },
    email: {
      type: Sequelize.STRING(140),
      allowNull: false
    },
    telefone: {
      type: Sequelize.STRING(15),
      allowNull: true
    }
  }
);

modelUsuarios.sync({force:true});

module.exports = modelUsuarios;
