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
      },
      video: {
         type: ObjectId,
         ref: 'videos',
         required: [true, 'Please provide video informations'],
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
