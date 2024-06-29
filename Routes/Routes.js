const express = require('express')
const route = express.Router();



route.get('/', (req, res) => {
    res.send('Servidor Rodando!');
});

//#region Mensagens
const controllerMensage = require('../Controllers/MsgController')

route.get('/ListMensagens', controllerMensage.List);
route.post('/CreateMensagens', controllerMensage.Create);
route.post('/UpdateMensagens', controllerMensage.Update);
route.post('/DeleteMensagens', controllerMensage.Delete);
route.get('/getOneMensagens', controllerMensage.getOne)

//#endregion

//#region Usuarios
const ControllerUsuario = require('../Controllers/UsuarioController')

route.get('/UserList', ControllerUsuario.UserList);
route.post('/UserCreate', ControllerUsuario.UserCreate);
route.post('/UserUpdate', ControllerUsuario.UserUpdate);
route.post('/UserDelete', ControllerUsuario.UserDelete);

//#endregion

module.exports = route;