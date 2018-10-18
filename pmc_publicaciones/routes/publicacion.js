const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Publicacion = require('../models/Publicacion');

router.get('/', (req, res) => {
    Publicacion.find().exec().then(docs => {
        console.log(docs);
        if (docs.length > 0) {
            res.status(200).json(docs);
        } else {
            res.status(404).send('No hay publicaciones en la base de datos');
        }
    }).catch(err => {
        console.log(err);
        res.status(500).json({ error: err });
    })
});

router.get('/:id', (req, res) => {
    const id = req.params.id;
    Publicacion.findById(id).exec().then(doc => {
        console.log(doc);
        res.status(200).json(doc);
    }).catch(err => {
        console.log(err);
        res.status(404).json({ error: err })
    })
});

router.post('/', (req, res) => {
    const publicacion = Publicacion({
        _id: new mongoose.Types.ObjectId(),
        titulo: req.body.titulo,
        contenido: req.body.contenido,
        autor: req.body.autor,
        categoria: req.body.categoria
    });
    publicacion.save().then(result => {
        console.log(result);
        res.status(200).json(result);
    }).catch(err => {
        console.log(err);
        res.status(500).json({ error: err })
    });
});

router.put('/api/courses/:id', (req, res) => {

});

router.delete('/:id', (req, res) => {
    const id = req.params.id;
    Publicacion.remove({ _id: id }).exec().then(result => {
        console.log(result);
        res.status(200).json(result);
    }).catch(err => {
        console.log(err);
        res.status(500).json({ error: err })
    })
});

module.exports = router;