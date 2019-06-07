var express = require("express");
var { connection } = require("./mysql");
var mysql = require("./mysql");

var fs = require("fs");

var app = express.Router();

app.get('/', function(req, res, next){
  //res.send("ok");

  // console.log('Inside the homepage callback function')
  // console.log(req.sessionID);
  // res.send(req.sessionID)
  // connection.query("SELECT * FROM CUSTOMERS", function(err, rows, fields){
  //   if (err) throw err;

  //   res.send(rows);
  // });

  mysql.connection.query("SELECT * FROM CUSTOMERS", function(err, rows, fields){
    if (err) throw err;

    res.send(rows);
  });

});

module.exports = app;