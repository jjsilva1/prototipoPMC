const mongoose = require('mongoose');

const publicacionSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    titulo: String,
    contenido: String,
    autor: String,
    categoria: String
});

module.exports = mongoose.model('Publicacion', publicacionSchema);