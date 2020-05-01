const { Schema, model } = require('mongoose');
const Locacion = mongoose.model('Locacion');

const EventoSchema = new Schema({
    nombre: {
        type: String,
        required
    },
    descripcion: {
        type: String
    },
    fecha: {
        type: Date,
        required: true
    },
    locacion: {
        type: Schema.ObjectId,
        ref: 'Location',
        required: true
    }
}, {
    timestamps: true
});

module.exports = model('Evento', EventoSchema);