const mongoose = require('mongoose');
const videosSchema = require('@schemas').videos;
module.exports = mongoose.model('videos', videosSchema);
