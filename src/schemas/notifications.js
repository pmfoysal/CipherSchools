const mongoose = require('mongoose');
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
         ...{
            type: ObjectId,
            ref: 'videos',
            required: [true, 'Please provide video informations'],
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
