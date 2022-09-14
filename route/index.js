'use strict';

const express = require('express');
const textviewController = require('../controller/textviewController');
const authorController = require('../controller/authorController');
const genreController = require('../controller/genreController');
const SuggestionController = require('../controller/SuggestionController');

const api = express.Router();

/*  Routes of books with api */


api.get('/textviews/:start', textviewController.getTextViews);

api.get('/authors/', authorController.getAuthors);
api.get('/genres/', genreController.getGenres);

api.get('/textview/getbyid/:id', textviewController.getTextView);
api.get('/textviews/filter/search/', textviewController.getTextViewFilter);
api.post('/suggestion', SuggestionController.suggestion);





module.exports = api;