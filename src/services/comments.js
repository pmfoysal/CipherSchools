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

exports.getComments = async (vId, query) => {
   const temps = {
      page: Number(query?.page) - 1,
      limit: Number(query?.limit),
      fields: query?.fields?.replaceAll(/[, ]/g, ' '),
   };
   const result = await comments
      .find({ ...query?.filter, video: vId })
      .sort(query?.sort)
      .select(temps.fields)
      .populate('comments.user', '-password -auth -__v');
   if (!result?.length) throw new Error('No comments found with these queries');
   return {
      totalItems: result?.length,
      totalPages: Math.ceil(result?.length / (temps?.limit || result?.length)),
      data: result,
   };
};

exports.likeComment = async () => {};

exports.dislikeComment = async () => {};

exports.replyComment = async () => {};
