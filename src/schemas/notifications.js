const mongoose = require('mongoose');
const valid = require('validator').default;
const { ObjectId } = mongoose.Schema.Types;

const notificationsSchema = mongoose.Schema(
   {
      title: {
         type: String,
         trim: true,
         required: [true, 'Please provide a notifications title'],
      },
      isRead: {
         type: Boolean,
         default: false,
         required: [true, 'Please provide a notifications isRead'],
      },
      video: {
         title: {
            type: String,
            trim: true,
            required: [true, 'Please provide a video title'],
         },
         description: {
            type: String,
            trim: true,
            required: [true, 'Please provide a video description'],
         },
         thumbnail: {
            type: URL,
            required: [true, 'Please provide a video thumbnail link'],
            validate: [valid.isURL, 'Please provide a valid thumbnail url'],
         },
         creator: {
            type: ObjectId,
            ref: 'users',
            required: [true, 'Please provide creator informations'],
         },
         counts: {
            likes: {
               type: Number,
               required: [true, 'Please provide the video likes count'],
            },
            dislikes: {
               type: Number,
               required: [true, 'Please provide the video dislikes count'],
            },
            comments: {
               type: Number,
               required: [true, 'Please provide the video comments count'],
            },
         },
         createdAt: {
            type: Date,
            required: [true, 'Please provide a video created date'],
            validate: [valid.isDate, 'Please provide a valid video created date'],
         },
         updatedAt: {
            type: Date,
            required: [true, 'Please provide a video updated date'],
            validate: [valid.isDate, 'Please provide a valid video updated date'],
         },
      },
      receiver: {
         type: ObjectId,
         ref: 'users',
         required: [true, 'Please provide receiver informations'],
      },
   },
   {
      timestamps: true,
   }
);

module.exports = notificationsSchema;
