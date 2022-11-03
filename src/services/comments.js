const users = require('@models').users;
const videos = require('@models').videos;
const comments = require('@models').comments;

exports.postComments = async (vId, uId, data) => {
   const revised = {
      video: await videos.findById(vId),
      comments: {
         user: await users.findById(uId),
         content: data.content,
         replies: [],
      },
   };
   return (await comments.create(revised)).depopulate(['video', 'comments.user']);
};

exports.getComments = async () => {};

exports.likeComment = async () => {};

exports.dislikeComment = async () => {};

exports.replyComment = async () => {};
