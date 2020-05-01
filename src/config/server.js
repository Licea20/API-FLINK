const express = require('express');
const path = require('path');
const morgan = require('morgan');


// Inicializaciones
const app = express();

// Configuraciones
app.set('port', process.env.PORT || 4000);
//app.set('views', path.join(__dirname, 'views'));


// Middlewares
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));
app.use(express.json());

// Variables Globales


// Rutas
app.use(require('../routes/usuario.routes'));

// Archivos Estáticos
app.use(express.static(path.join(__dirname, 'public')));

module.exports = app;