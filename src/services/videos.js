const users = require('@models').users;
const videos = require('@models').videos;

exports.postVideos = async (id, data) => {
   if (data.hasOwnProperty('creator')) {
      throw new Error('Please remove creator property, it will add automatically!');
   }
   if (data.hasOwnProperty('likes')) {
      throw new Error('Please remove likes property, it will add automatically!');
   }
   if (data.hasOwnProperty('dislikes')) {
      throw new Error('Please remove dislikes property, it will add automatically!');
   }
   const creator = await users.findById(id).select('-password -auth -__v');
   const revised = { ...data, creator };
   return await videos.create(revised);
};

exports.getVideos = async () => {};

exports.getVideo = async () => {};

exports.likeVideo = async () => {};

exports.dislikeVideo = async () => {};

exports.shareVideo = async () => {};
