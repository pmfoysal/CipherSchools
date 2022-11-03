const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types;

const videosInfoSchema = mongoose.Schema(
   {
      video: {
         type: ObjectId,
         ref: 'videos',
         required: [true, 'Please provide video informations'],
      },
      comments: [
         {
            user: {
               type: ObjectId,
               ref: 'users',
            },
            content: {
               type: String,
               trim: true,
               minLength: [1, 'Comment text must be at least 1 characters long'],
               maxLenght: [200, 'Comment text must be maximum 200 characters long'],
            },
            replies: [
               {
                  user: {
                     type: ObjectId,
                     ref: 'users',
                  },
                  content: {
                     type: String,
                     trim: true,
                     minLength: [1, 'Comment reply must be at least 1 characters long'],
                     maxLenght: [200, 'Comment reply must be maximum 200 characters long'],
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
