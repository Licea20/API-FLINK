const mongoose = require('mongoose');

const { MONGODB_HOST, MONGODB_DATABASE, MONGODB_USER, MONGODB_PASS } = process.env;
const MONGODB_URI = `mongodb://${MONGODB_HOST}/${MONGODB_DATABASE}`;
console.log('HOST: ', MONGODB_HOST);
//const MONGODB_URI = `mongodb+srv://${MONGODB_USER}:${MONGODB_PASS}@${MONGODB_HOST}/${MONGODB_DATABASE}?retryWrites=true&w=majority`;

mongoose.connect(MONGODB_URI, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    })
    .then(db => console.log('Base de datos conectada'))
    .catch(err => console.log(err));