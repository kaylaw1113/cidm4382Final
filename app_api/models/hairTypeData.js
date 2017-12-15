//modeled after airportData.js
var mongoose = require('mongoose');

var PatternSchema = new mongoose.Schema({
    hairID: String,
    hairPattern: String
});

var TypeSchema = new mongoose.Schema({
    hairType: String,
    hairID: String,
    hairPattern: [PatternSchema]
});

mongoose.model('hairType', TypeSchema, 'hairType');