const comments = require('./comments');
const request = require('@middlewares');
const videos = require('express').Router();
const controller = require('@controllers').videos;

videos
   .route('/')
   .get(request.verifyToken, controller.getVideos)
   .post(request.verifyToken, request.verifyUser(['creator']), controller.postVideos);
videos.route('/:vId').get(request.verifyToken, controller.getVideo);
videos.route('/:vId/like').post(request.verifyToken, controller.likeVideo);
videos.route('/:vId/dislike').post(request.verifyToken, controller.dislikeVideo);
videos.route('/:vId/share').post(request.verifyToken, controller.shareVideo);
videos.use('/:vId/comments', comments);

module.exports = videos;
