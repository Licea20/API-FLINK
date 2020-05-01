const { Router } = require('express');

const router = Router();

const { registrarUsuario, loginUsuario, index, yo } = require('../controllers/usuario.controller');
const verificarToken = require('../controllers/verificarToken');


router.get('/', index);
router.get('/yo', verificarToken, yo);
router.post('/usuario/add', registrarUsuario);
router.post('/usuario/login', loginUsuario);

module.exports = router;