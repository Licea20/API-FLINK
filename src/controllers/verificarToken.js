const { FRASE_SECRETA } = process.env;
const jwt = require('jsonwebtoken');

verificarToken = (req, res, next) => {
    const token = req.headers['x-access-token'];

    if (!token) {
        return res.status(401).json({
            auth: false,
            mensaje: 'No se encontró token'
        });
    }

    var decoded;
    try {
        decoded = jwt.verify(token, FRASE_SECRETA);
    } catch (err) {}

    if (decoded) {
        console.log(decoded);
        req.usuarioId = decoded.id;
    } else {
        req.usuarioId = -1;
    }

    next();
};

module.exports = verificarToken;