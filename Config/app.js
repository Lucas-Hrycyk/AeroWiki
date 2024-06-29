const express = require('express');
const APi = express();
const route = require('../Routes/Routes');
APi.use(express.json());
APi.use(route);

const PORT = 4300; 
APi.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});