var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
//section
var session = require('express-session');
var FileStore = require('session-file-store')(session);

var passport = require('passport');
var authenticate = require('./authenticate');

var indexRouter = require('./routes/index');
var anunciosRouter = require('./routes/anuncios');
var profilesRouter = require('./routes/profiles');
var usersRouter = require('./routes/profiles');

var config = require('./config');

//mongoose
const mongoose = require('mongoose');
mongoose.set('useUnifiedTopology', true);
const url =  config.mongoUrl;
const connect = mongoose.connect(url, { useNewUrlParser: true });

connect.then((db) => {
  console.log("Connected correctly to server");
}, (err) => { console.log(err); });

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//app.use(cookieParser('12345-67890-73567-54321'));

app.use(passport.initialize());

app.use('/users', usersRouter);

//cookies auth

app.use(express.static(path.join(__dirname, 'public')));

app.use('/anuncios', anunciosRouter);
app.use('/profiles', profilesRouter);
app.use('/users', usersRouter);

module.exports = app;
