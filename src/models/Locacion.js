const { Schema, model } = require('mongoose');

const LocacionSchema = new Schema({
    nombre: {
        type: String,
        required: true
    },
    direccion: {
        type: Date,
        required: true
    },
    eventos: [{
        type: Schema.ObjectId,
        ref: 'Evento',
        required: true
    }]
}, {
    timestamps: true,
});

module.exports = model('Locacion', LocacionSchema);