var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');
var FileStore = require('session-file-store')(session);
var passport = require('passport');
var authenticate = require('./authenticate');

//swagger
const swaggerUi = require('swagger-ui-express')
const swaggerFile = require('./swagger_output.json')

//routers
var indexRouter = require('./routes/index');
var anunciosRouter = require('./routes/anuncios');
var profilesRouter = require('./routes/profiles');
var usersRouter = require('./routes/users');
var chatsRouter = require('./routes/chats');

var config = require('./config');

//conexão com mongodb
const mongoose = require('mongoose');
const url =  config.mongoUrl;
console.log(url);
const connect = mongoose.connect(url, { useNewUrlParser: true , useUnifiedTopology: true});
connect.then((db) => {
  console.log("Connected correctly to server");
}, (err) => { console.log(err); });

var app = express();

app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(passport.initialize());
app.use('/users', usersRouter);
app.use('/anuncios', anunciosRouter);
app.use('/profiles', profilesRouter);
app.use('/chats', chatsRouter);
app.use(express.static(path.join(__dirname, 'public')));

module.exports = app;