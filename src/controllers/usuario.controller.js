const usuarioController = {};

const Usuario = require('../models/Usuario');

const jwt = require('jsonwebtoken');
const { FRASE_SECRETA } = process.env;

// Index
usuarioController.index = (req, res) => {
    res.send('index');
};

// Login usuario
usuarioController.registrarUsuario = async(req, res) => {
    const { nombre, email, password, roles } = req.body;
    console.log(nombre, email, password);
    const nuevoUsuario = new Usuario({ nombre, email, password, roles });
    nuevoUsuario.password = await nuevoUsuario.encriptarPassword(password);
    await nuevoUsuario.save();

    const token = jwt.sign({ id: nuevoUsuario._id }, FRASE_SECRETA, {
        expiresIn: 60 * 60 * 24
    });

    res.json({ nuevoUsuario, token });
};

usuarioController.loginUsuario = async(req, res) => {
    const { email, password } = req.body;
    console.log(email, password);

    const usuario = await Usuario.findOne({ email });
    if (!usuario) {
        return res.status(404).send('El correo no se encuentra registrado');
    }

    const passValida = await usuario.validarPassword(password);
    if (!passValida) {
        return res.status(401).json({
            auth: false,
            token: null
        });
    }
    //console.log(passValida);
    const token = jwt.sign({ id: usuario._id }, FRASE_SECRETA, {
        expiresIn: 60 * 60 * 24
    })

    res.json({
        auth: true,
        token
    });
};


usuarioController.yo = async(req, res) => {
    if (req.usuarioId == -1) {
        return res.status(401).json({
            auth: false,
            mensaje: 'Token no válido'
        });
    }
    const usuario = await Usuario.findById(req.usuarioId, { password: 0 });

    if (!usuario) {
        return res.status(404).send('Usuario no encontrado');
    }

    res.json(usuario);
};

module.exports = usuarioController;