const { sendRes } = require('@utilities');
const comments = require('@services').comments;

exports.postComments = async (req, res) => {
   sendRes(res, () => comments.postComments(req.params.vId, req.body));
};

exports.getComments = async (req, res) => {
   sendRes(res, () => comments.getComments(req.params.vId, req.query));
};

exports.likeComment = async (req, res) => {
   sendRes(res, () => comments.likeComment(req.params.vId, req.params.cId, req.body));
};

exports.dislikeComment = async (req, res) => {
   sendRes(res, () => comments.dislikeComment(req.params.vId, req.params.cId, req.body));
};

exports.replyComment = async (req, res) => {
   sendRes(res, () => comments.replyComment(req.params.vId, req.params.cId, req.body));
};
