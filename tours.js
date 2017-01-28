'use strict';

var mongoose = require('mongoose');

var tourSchema = mongoose.Schema({
    longi: Number,
    lati: Number,
    audioUrl: String,
    createdAt: Number,
    rating: Number,
    noOfRatings: Number

});

module.exports = mongoose.model('Tour', tourSchema);