'use strict'

const mongoose = require('mongoose');
const schema = mongoose.Schema;

var Schema = mongoose.Schema,
ObjectId = Schema.ObjectId;
const AuthorModel = schema
(
	{
		_id: ObjectId,
		name: String,
	}
);

module.exports = mongoose.model('Author', AuthorModel, "Authors");