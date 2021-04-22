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
//app.use(cookieParser('12345-67890-73567-54321'));

app.use(session({
  name: 'session-id',
  secret: '12345-67890-73567-54321',
  saveUninitialized: false,
  resave: false,
  store: new FileStore()
}));

app.use(passport.initialize());
app.use(passport.session());

app.use('/users', usersRouter);

//cookies auth
function auth (req, res, next) {
  console.log(req.user);

  if(!req.user) {
    var err = new Error('You are not authenticated!');
    err.status = 403;
    next(err);
  } else {
    next();
  }
}

app.use(auth);

app.use(express.static(path.join(__dirname, 'public')));

app.use('/anuncios', anunciosRouter);
app.use('/profiles', profilesRouter);
app.use('/users', usersRouter);

module.exports = app;
