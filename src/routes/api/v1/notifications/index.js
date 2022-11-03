const request = require('@middlewares');
const controller = require('@controllers').notifications;
const notifications = require('express').Router({ mergeParams: true });

notifications
   .route('/')
   .get(request.verifyToken, controller.getNotifications)
   .post(request.verifyToken, controller.postNotifications);
notifications
   .route('/:nId')
   .patch(request.verifyToken, controller.patchNotifications)
   .delete(request.verifyToken, controller.deleteNotifications);

module.exports = notifications;
