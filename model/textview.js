'use strict'

const mongoose = require('mongoose');
const schema = mongoose.Schema;

var Schema = mongoose.Schema,
ObjectId = Schema.ObjectId;
const TextViewModel = schema
(
	{
		_id: ObjectId,
		id: Number,
		title: String,
		timestamp: Date,
		texto: String,
		author: String,
		genero: String,
		image: String,
		Comentarios: Array,
	}
);

module.exports = mongoose.model('Poema', TextViewModel);