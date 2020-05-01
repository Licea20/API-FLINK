const { Router } = require('express');

const router = Router();

const { loginUsuario, index } = require('../controllers/usuario.controller');


router.get('/', index);
router.get('/usuario/login', loginUsuario);

module.exports = router;