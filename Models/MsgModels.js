const { Sequelize, DataTypes, Model, NOW } = require('sequelize');
const database = require('../Config/database');
const Usuarios = require('./UsuarioModels');
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
        },

        UsuarioId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: Usuarios,
                key: 'UsuarioId'
            }
        }
    },

    {
        sequelize: database, 
        modelName: 'Mensagem',
        tableName: 'Mensagens', 
        schema: schema, 
        timestamps: false 
    },

);

Usuarios.hasMany(Mensagens, { foreignKey: 'UsuarioId' });
Mensagens.belongsTo(Usuarios, { foreignKey: 'UsuarioId' });

module.exports = Mensagens;