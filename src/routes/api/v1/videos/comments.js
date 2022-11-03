const comments = require('express').Router();
const controller = require('@controllers').comments;

comments.route('/').get(controller.getComments).post(controller.postComments);
comments.route('/:cId/like').post(controller.likeComment);
comments.route('/:cId/dislike').post(controller.dislikeComment);
comments.route('/:cId/reply').post(controller.replyComment);

module.exports = comments;
