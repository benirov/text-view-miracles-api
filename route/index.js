'use strict';

const express = require('express');
const textviewController = require('../controller/textviewController');
const SuggestionController = require('../controller/SuggestionController');

const api = express.Router();

/*  Routes of books with api */


api.get('/textviews/:start', textviewController.getTextViews); 

api.get('/textview/getbyid/:id', textviewController.getTextView);
api.get('/textview/filter/:search', textviewController.getTextViewFilter);
api.post('/suggestion', SuggestionController.suggestion);





module.exports = api;