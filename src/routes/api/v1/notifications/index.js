const request = require('@middlewares');
const notifications = require('express').Router();
const controller = require('@controllers').notifications;

notifications
   .route('/')
   .get(request.verifyToken, controller.getNotifications)
   .post(request.verifyToken, controller.postNotifications);
notifications
   .route('/:nId')
   .patch(request.verifyToken, controller.patchNotifications)
   .delete(request.verifyToken, controller.deleteNotifications);

module.exports = notifications;
