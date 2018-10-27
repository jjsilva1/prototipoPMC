const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Producto = require('../models/Producto');

router.get('/', (req, res) => {
    Producto.find().exec().then(docs => {
        console.log(docs);
        if (docs.length > 0) {
            res.status(200).json(docs);
        } else {
            res.status(404).send('No hay sedes en la base de datos');
        }
    }).catch(err => {
        console.log(err);
        res.status(500).json({ error: err });
    })
});

router.post('/', (req, res) => {
    const producto = Producto({
        _id: new mongoose.Types.ObjectId(),
        nombre: req.body.nombre,
        precio: req.body.precio,
    });
    producto.save().then(result => {
        console.log(result);
        res.status(200).json(result);
    }).catch(err => {
        console.log(err);
        res.status(500).json({ error: err })
    });
});

router.delete('/:id', (req, res) => {
    const id = req.params.id;
    Producto.remove({ _id: id }).exec().then(result => {
        console.log(result);
        res.status(200).json(result);
    }).catch(err => {
        console.log(err);
        res.status(500).json({ error: err })
    })
});

module.exports = router;