const mongoose = require('mongoose');
const notificationsSchema = require('@schemas').notifications;
module.exports = mongoose.model('notifications', notificationsSchema);
