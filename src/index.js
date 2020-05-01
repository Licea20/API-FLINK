require('dotenv').config();

const app = require('./config/server');
require('./config/database');

app.listen(app.get('port'), () => {
    console.log("Servidor en el puerto: ", app.get('port'));
});