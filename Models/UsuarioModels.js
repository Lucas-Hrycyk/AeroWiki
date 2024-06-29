const { Sequelize, DataTypes, Model, NOW } = require('sequelize');
const database = require('../Config/database');
const schema = '';

class Usuarios extends Model {}

Usuarios.init(
    {
        UsuarioId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
        },

        Nome: {
            type: DataTypes.STRING(30),
            allowNull: false,
        },

        Email: {
            type: DataTypes.STRING(30),
            allowNull: false,

        },

        Cidade: {
            type: DataTypes.STRING(30),
            allowNull: true,
        },

        Telefone: {
            type: DataTypes.STRING(11),
            allowNull: true,
            validate: {
                len: [0, 11]
            }
        },

        DataNascimento: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        
        DataCriacao: {
            type: DataTypes.DATE,
            allowNull: false
        },

        DataConfirmacaoDados: {
            type: DataTypes.DATE,
            allowNull: false,
        }
    },
    
    {
        sequelize: database, 
        modelName: 'Usuarios',
        tableName: 'Usuarios', 
        schema: schema, 
        timestamps: false 
    }
);

module.exports = Usuarios;
