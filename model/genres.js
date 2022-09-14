'use strict'

const mongoose = require('mongoose');
const schema = mongoose.Schema;

var Schema = mongoose.Schema,
ObjectId = Schema.ObjectId;
const GenreModel = schema
(
	{
		_id: ObjectId,
		name: String,
	}
);

module.exports = mongoose.model('Genre', GenreModel, "Genres");