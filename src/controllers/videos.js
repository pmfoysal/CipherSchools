const { sendRes } = require('@utilities');
const videos = require('@services').videos;

exports.postVideos = async (req, res) => {
   sendRes(res, () => videos.postVideos(req.body));
};

exports.getVideos = async (req, res) => {
   sendRes(res, () => videos.getVideos(req.query));
};

exports.getVideo = async (req, res) => {
   sendRes(res, () => videos.getVideo(req.params.vId, req.query));
};

exports.likeVideo = async (req, res) => {
   sendRes(res, () => videos.likeVideo(req.params.vId, req.body));
};

exports.dislikeVideo = async (req, res) => {
   sendRes(res, () => videos.dislikeVideo(req.params.vId, req.body));
};

exports.shareVideo = async (req, res) => {
   sendRes(res, () => videos.shareVideo(req.params.vId, req.body));
};
