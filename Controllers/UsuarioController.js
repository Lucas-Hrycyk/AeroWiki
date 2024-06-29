const UserModel = require('../Models/UsuarioModels');
const { Delete } = require('./MsgController');

module.exports = {
    
    async UserList(req, res) {
        try {
            const usuario = await UserModel.findAll();
            console.log("Usuarios encontrados:", usuario);
            return res.json(usuario);
        } catch (error) {
            console.log("Erro ao listar Usuarios: " + error);
            return res.status(500).json({ error: "Erro ao listar Usuarios" });
        }
    },

    async UserCreate(req, res) {
        try {
            const usuario = await UserModel.create({
                UsuarioId: req.body.UsuarioId,
                Nome: req.body.Nome,
                Email: req.body.Email,
                Cidade: req.body.Cidade,
                Telefone: req.body.Telefone,
                DataNascimento: req.body.DataNascimento
            });
            console.log("Usuario criado:", usuario);
            return res.status(201).json(usuario);
        } catch (error) {
            console.log("Erro ao criar Usuario: " + error);
            return res.status(500).json({ error: "Erro ao criar Usuario" });
        }
    },

    async UserUpdate(req, res){
        try
        {
            const usuario = await UsuarioModel.findByPk(req.body.Codigo);

            if(usuario){
                usuario.Email = req.body.Email,
                usuario.Cidade = req.body.Cidade,
                usuario.Telefone = req.body.Telefone,
                await usuario.save();

                return res.json(usuario);
            } else{
                return res.status(404).json({ error: "Usuario não encontrado" });
            }
        } catch (error) {
            
        }
    },

    async UserDelete(req, res){
        try
        {
            const usuario = await UsuarioModel.findByPk(req.body.Codigo);

            if(usuario){
                await usuario.destory();
                return res.json({message: "Usuario excluido com sucesso"})
            }
        } catch (error) {
            return res.status(500).json({ error: "Erro ao deletar usurio" });
        }
    }
};