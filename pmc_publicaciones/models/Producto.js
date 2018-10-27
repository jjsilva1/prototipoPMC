const mongoose = require('mongoose');

const reservaSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    nombre: String,
    precio: Number
});

module.exports = mongoose.model('Reserva', reservaSchema);