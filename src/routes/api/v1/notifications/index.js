const notifications = require('express').Router();
const controller = require('@controllers').notifications;

notifications.route('/').get(controller.getNotifications).post(controller.postNotifications);
notifications.route('/:nId').patch(controller.patchNotifications).delete(controller.deleteNotifications);

module.exports = notifications;
