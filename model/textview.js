'use strict'

const mongoose = require('mongoose');
const schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs')

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
		texto: String,
		genero: String,
		image: String,
		Comentarios: Array,
	}
);

module.exports = mongoose.model('Poema', TextViewModel);