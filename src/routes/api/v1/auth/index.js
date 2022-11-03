const request = require('@middlewares');
const auth = require('express').Router();
const controller = require('@controllers').auth;

auth.route('/signin').post(controller.signin);
auth.route('/signup').post(controller.signup);
auth.route('/signout').post(request.verifyToken, controller.signout);

module.exports = auth;
