const usuarioController = {};

const Usuario = require('../models/Usuario');



// Index
usuarioController.index = (req, res) => {
    res.send('index API');
};

// Login usuario
usuarioController.loginUsuario = (req, res) => {
    console.log('Login de usuario');
    res.send('Login de usuario');
};

module.exports = usuarioController;