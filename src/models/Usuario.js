const { Schema, model } = require('mongoose');
const bcrypt = require('bcryptjs');

const UsuarioSchema = new Schema({
    nombre: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    roles: [{
        type: String,
        required: true
    }],
    eventosCreados: [{
        type: Schema.ObjectId,
        ref: 'Evento'
    }],
    eventosAsistir: [{
        type: Schema.ObjectId,
        ref: 'Evento'
    }]
}, {
    timestamps: true
});

UsuarioSchema.methods.encriptarPassword = async password => {
    const solt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, solt);
};

UsuarioSchema.methods.matchPassword = async function(password) {
    return await bcrypt.compare(password, this.password);
};

module.exports = model('Usuario', UsuarioSchema);