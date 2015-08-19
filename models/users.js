'use strict';

var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');
var Schema = mongoose.Schema;

var userSchema = new Schema ({
  name: { type: String, lowercase: true, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  products: [{ type: Schema.Types.ObjectId, ref: 'products' }] //referenced model
});

module.exports = mongoose.model('users', userSchema);