const auth = require('./auth');
const videos = require('./videos');
const v1 = require('express').Router();
const notifications = require('./notifications');

v1.use('/auth', auth);
v1.use('/videos', videos);
v1.use('/notifications', notifications);

module.exports = v1;
