const mongoose = require('mongoose');
const valid = require('validator').default;

const videosSchema = mongoose.Schema(
   {
      title: {
         type: String,
         trim: true,
         required: [true, 'Please provide a video title'],
         minLength: [3, 'Video title must be at least 3 characters long'],
         maxLenght: [150, 'Video title must be maximum 150 characters long'],
      },
      description: {
         type: String,
         trim: true,
         required: [true, 'Please provide a video description'],
         minLength: [5, 'Video description must be at least 5 characters long'],
         maxLenght: [1000, 'Video description must be maximum 1000 characters long'],
      },
      thumbnail: {
         type: URL,
         required: [true, 'Please provide a video thumbnail link'],
         validate: [valid.isURL, 'Please provide a valid thumbnail url'],
      },
      video: {
         type: URL,
         required: [true, 'Please provide a video link'],
         validate: [valid.isURL, 'Please provide a valid video url'],
      },
      author: {
         _id: {
            type: String,
            required: [true, 'Please provide a author id'],
         },
         name: {
            type: String,
            required: [true, 'Please provide a author name'],
         },
         role: {
            type: String,
            required: [true, 'Please provide a author role'],
         },
         username: {
            type: String,
            lowercase: true,
            required: [true, 'Please provide a author username'],
         },
         image: {
            type: URL,
            required: [true, 'Please provide a author image url'],
            validate: [valid.isURL, 'Please provide a valid author image url'],
         },
      },
   },
   {
      timestamps: true,
   }
);

module.exports = videosSchema;
