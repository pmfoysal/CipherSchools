const auth = require('express').Router();
const controller = require('@controllers').auth;

auth.route('/signin').post(controller.signin);
auth.route('/signup').post(controller.signup);
auth.route('/signout').get(controller.signout);

module.exports = auth;