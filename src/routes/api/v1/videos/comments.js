const request = require('@middlewares');
const comments = require('express').Router();
const controller = require('@controllers').comments;

comments.route('/').get(request.verifyToken, controller.getComments).post(request.verifyToken, controller.postComments);
comments.route('/:cId/like').post(request.verifyToken, controller.likeComment);
comments.route('/:cId/dislike').post(request.verifyToken, controller.dislikeComment);
comments.route('/:cId/reply').post(request.verifyToken, controller.replyComment);

module.exports = comments;
