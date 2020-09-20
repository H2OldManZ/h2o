// app/models/user.js
// load the things we need
var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');

// define the schema for our user model
var thingSchema = mongoose.Schema({

      thing: String,
      name:  String

});


module.exports = mongoose.model('Thing', thingSchema);
