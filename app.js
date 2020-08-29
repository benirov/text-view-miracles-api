'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app =  express();





app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});
const api = require('./route'); 

app.use(bodyParser.json({limit: "50mb"}));
app.use(bodyParser.urlencoded({limit: "50mb", extended: true, parameterLimit:50000}));

app.use('/api', api);

module.exports = app;
