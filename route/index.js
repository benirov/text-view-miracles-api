'use strict';

const express = require('express');
const textviewController = require('../controller/textviewController');

const api = express.Router();

/*  Routes of books with api */


api.get('/textviews/:start', textviewController.getTextViews); 

api.get('/textview/getbyid:id', textviewController.getTextView);





module.exports = api;