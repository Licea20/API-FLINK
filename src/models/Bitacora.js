const { Schema, model } = require('mongoose');
const Bitacora = mongoose.model('Bitacora');

const BitacoraSchema = new Schema({
    accion: {
        type: String,
        required: true
    },
    usuario: {
        type: Schema.ObjectId,
        ref: 'Usuario',
        required: true
    },
    coleccion: {
        type: String,
        required: true
    },
    id: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

module.exports = model('Bitacora', BitacoraSchema);