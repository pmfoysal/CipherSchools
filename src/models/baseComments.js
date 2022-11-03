const mongoose = require('mongoose');
const baseCommentsSchema = require('@schemas').baseComments;
module.exports = mongoose.model('baseComments', baseCommentsSchema);
