const comments = require('./comments');
const videos = require('express').Router();
const controller = require('@controllers').videos;

videos.route('/').get(controller.getVideos).post(controller.postVideos);
videos.route('/:vId').get(controller.getVideo);
videos.route('/:vId/like').post(controller.likeVideo);
videos.route('/:vId/dislike').post(controller.dislikeVideo);
videos.route('/:vId/share').post(controller.shareVideo);
videos.use('/:vId/comments', comments);

module.exports = videos;
