const { Sequelize } = require('sequelize');

const database = new Sequelize('AeroWiki_Msgm_db', 'sa', '84641599aA@', {
    dialect: 'mssql',
    host: 'localhost',
    port: 1433,
    dialectOptions: {
        options: {
            encrypt: false,
            trustServerCertificate: true
        }
    }
});

database.authenticate()
    .then(() => {
        console.log('Conexão estabelecida com sucesso.');
    })
    .catch(err => {
        console.error('Não foi possível conectar ao banco de dados:', err);
    });


database.sync();

module.exports = database;