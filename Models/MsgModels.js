const { Sequelize, DataTypes, Model, NOW } = require('sequelize');
const database = require('../Config/database');
const schema = '';

class Mensagens extends Model {}

Mensagens.init(
    {
        MsgId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
        },

        Titulo: {
            type: DataTypes.STRING(30),
            allowNull: false,
        },

        Mensagem: {
            type: DataTypes.STRING(500),
            allowNull: false,

        },

        DataCriacao: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },

        DataAtualizacao: {
            type: DataTypes.DATE,
            allowNull: true,
        }
    },
    {
        sequelize: database, 
        modelName: 'Mensagem',
        tableName: 'Mensagens', 
        schema: schema, 
        timestamps: false 
    }
);

module.exports = Mensagens;