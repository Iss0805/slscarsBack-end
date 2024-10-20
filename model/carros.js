const Sequelize = require('sequelize');

const modelUsuarios = require('./usuario')

const connection = require('../database/databaseSlscars');

const modelCarros = connection.define(
    'carros',
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        placa: {
            type: Sequelize.STRING(10),
            allowNull: true
        },
        modelo: {
            type: Sequelize.STRING(140),
            allowNull: true
        },
        cliente_id: {  
            type: Sequelize.INTEGER,
            allowNull: false,
         
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

modelUsuarios.hasMany(modelCarros,{
    foreignkey: 'id',
    sourcerKey:'cliente_id'
})

modelCarros.belongsTo(modelUsuarios,{
    foreignkey: 'cliente_id',
    sourcerKey:'id'

})
modelCarros.sync({ force: true });

module.exports = modelCarros;
