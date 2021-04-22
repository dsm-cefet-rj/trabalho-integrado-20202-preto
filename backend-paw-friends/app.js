var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var anunciosRouter = require('./routes/anuncios');
var profilesRouter = require('./routes/profiles');

//mongoose
const mongoose = require('mongoose');
mongoose.set('useUnifiedTopology', true);
const url = 'mongodb://localhost:27017/paw-friends-bd';
const connect = mongoose.connect(url, { useNewUrlParser: true });

connect.then((db) => {
  console.log("Connected correctly to server");
}, (err) => { console.log(err); });

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/anuncios', anunciosRouter);
app.use('/profiles', profilesRouter);

module.exports = app;
