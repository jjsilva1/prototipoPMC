// Basic Config
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');

// Routes
const productoRouter = require('./routes/producto');
const publicacionRouter = require('./routes/publicacion');

// App
const app = express();

// DB Cloud Atlas

//DB MongoDB
mongoose.connect('mongodb://localhost:27017/ParentsAcademy',
    {
      useNewUrlParser: true
    });
mongoose.connection.on('connected', function(err, resp){
    console.log("Conectado a DB");
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/producto', productoRouter);
app.use('/publicacion', publicacionRouter);


module.exports = app;

//PORT
const port = process.env.PORT || 8082;
app.listen(port, '0.0.0.0', console.log(`Listening on port ${port}`));