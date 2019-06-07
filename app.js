var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var test = require ("./routes/test");

var app = express();

const uuid = require('uuid/v4')
const session = require('express-session')

// add & configure middleware
app.use(session({
    genid: (req) => {
      console.log('Inside the session middleware')
      console.log(req.sessionID)
      return uuid() // use UUIDs for session IDs
    },
    secret: 'SerectKey',
    resave: false,
    saveUninitialized: true
    }));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
//app.use(express.static(path.join(__dirname, 'public/stylesheets')));
app.use(express.static('public'));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use("/test", test);

module.exports = app;
