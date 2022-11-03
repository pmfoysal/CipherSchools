const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types;

const videosInfoSchema = mongoose.Schema(
   {
      videoId: {
         type: ObjectId,
         ref: 'videos',
         required: [true, 'Please provide video informations'],
      },
      comments: [
         {
            content: {
               type: String,
               trim: true,
               minLength: [1, 'Comment text must be at least 1 characters long'],
               maxLenght: [200, 'Comment text must be maximum 200 characters long'],
            },
            ...{
               type: ObjectId,
               ref: 'users',
            },
            replies: [
               {
                  content: {
                     type: String,
                     trim: true,
                     minLength: [1, 'Comment replies must be at least 1 characters long'],
                     maxLenght: [200, 'Comment replies must be maximum 200 characters long'],
                  },
                  ...{
                     type: ObjectId,
                     ref: 'users',
                  },
               },
            ],
         },
      ],
   },
   {
      timestamps: true,
   }
);

module.exports = videosInfoSchema;
