const users = require('@models').users;
const videos = require('@models').videos;
const comments = require('@models').comments;
const baseComments = require('@models').baseComments;
const notifications = require('@models').notifications;

exports.postComments = async (vId, uId, data) => {
   const user = await users.findById(uId);
   const video = await videos.findById(vId);
   const comment = await baseComments.create({
      user,
      content: data.content,
   });
   const revised = {
      video,
      main: comment,
      replies: [],
   };
   const result = (await comments.create(revised)).depopulate(['video', 'main']).populate([
      {
         path: 'main',
         model: 'baseComments',
         populate: {
            path: 'user',
            model: 'users',
            select: '-password -auth',
         },
      },
   ]);
   await notifications.create({
      title: `${user.name} commented on your video: ${video.title}`,
      video,
      receiver: video.creator,
   });
   return result;
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
      .populate([
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
               select: '-password -auth',
            },
         },
      ]);
   if (!result?.length) throw new Error('No comments found with these queries');
   return {
      totalItems: result?.length,
      totalPages: Math.ceil(result?.length / (temps?.limit || result?.length)),
      data: result,
   };
};

exports.likeComment = async (vId, cId, uId) => {
   const user = await users.findById(uId);
   const video = await videos.findById(vId);
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
      await notifications.create({
         title: `${user.name} likes your comment: ${comment.content}`,
         video,
         receiver: comment.user,
      });
   }
   return result;
};

exports.dislikeComment = async (vId, cId, uId) => {
   const user = await users.findById(uId);
   const video = await videos.findById(vId);
   const comment = await baseComments.findById(cId);
   if (!comment) throw new Error('No comment is found with this id');
   let result = {};
   await baseComments.updateOne(
      { _id: cId },
      {
         $pull: { likes: uId },
      }
   );
   if (comment.dislikes.includes(uId)) {
      result = await baseComments.updateOne(
         { _id: cId },
         {
            $pull: { dislikes: uId },
         }
      );
   } else {
      result = await baseComments.updateOne(
         { _id: cId },
         {
            $push: { dislikes: user },
         }
      );
      await notifications.create({
         title: `${user.name} dislikes your comment: ${comment.content}`,
         video,
         receiver: comment.user,
      });
   }
   return result;
};

exports.replyComment = async (vId, cId, uId, data) => {
   const user = await users.findById(uId);
   const video = await videos.findById(vId);
   const comment = await comments.findById(cId).populate([
      {
         path: 'main',
         model: 'baseComments',
         populate: {
            path: 'user',
            model: 'users',
            select: '-password -auth',
         },
      },
   ]);
   const replied = await baseComments.create({
      user,
      content: data?.content,
   });
   const result = await comments.updateOne(
      { _id: cId },
      {
         $push: { replies: replied },
      }
   );
   await notifications.create({
      title: `${user.name} replied to your comment: ${comment.main.content}`,
      video,
      receiver: comment.main.user,
   });
   return result;
};
