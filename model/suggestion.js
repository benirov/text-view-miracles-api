'use strict'

const mongoose = require('mongoose');
const schema = mongoose.Schema;

var Schema = mongoose.Schema,
ObjectId = Schema.ObjectId;
const SuggestionModel = schema({
		_id: ObjectId,
		title: String,
		timestamp: Date,
		description: String,
		author: String,
		email: String,
	});

module.exports = mongoose.model('Suggestion', SuggestionModel);