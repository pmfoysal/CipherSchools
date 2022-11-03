const users = require('@models').users;
const videos = require('@models').videos;
const comments = require('@models').comments;
const baseComments = require('@models').baseComments;

exports.postComments = async (vId, uId, data) => {
   const comment = await baseComments.create({
      user: await users.findById(uId),
      content: data.content,
   });
   const revised = {
      video: await videos.findById(vId),
      comments: {
         main: comment,
         replies: [],
      },
   };
   return (await comments.create(revised)).depopulate(['video', 'comments.main']);
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
      .populate({
         path: 'comments',
         populate: [
            {
               path: 'main',
               model: 'baseComments',
               populate: {
                  path: 'user',
                  model: 'users',
                  select: '-password -auth',
               },
            },
            {
               path: 'replies',
               model: 'baseComments',
               populate: {
                  path: 'user',
                  model: 'users',
               },
            },
         ],
      });
   if (!result?.length) throw new Error('No comments found with these queries');
   return {
      totalItems: result?.length,
      totalPages: Math.ceil(result?.length / (temps?.limit || result?.length)),
      data: result,
   };
};

exports.likeComment = async (cId, uId) => {
   const user = await users.findById(uId).select('-password -auth -__v');
   const comment = await baseComments.findById(cId);
   if (!comment) throw new Error('No comment is found with this id');
   let result = {};
   await baseComments.updateOne(
      { _id: cId },
      {
         $pull: { dislikes: uId },
      }
   );
   if (comment.likes.includes(uId)) {
      result = await baseComments.updateOne(
         { _id: cId },
         {
            $pull: { likes: uId },
         }
      );
   } else {
      result = await baseComments.updateOne(
         { _id: cId },
         {
            $push: { likes: user },
         }
      );
   }
   return result;
};

exports.dislikeComment = async () => {};

exports.replyComment = async () => {};
