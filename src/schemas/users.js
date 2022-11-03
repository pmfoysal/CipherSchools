const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');
const valid = require('validator').default;

const userSchema = mongoose.Schema(
   {
      name: {
         type: String,
         trim: true,
         required: [true, 'Please provide a full name'],
         minLength: [3, 'User name must be at least 3 characters long'],
         maxLenght: [100, 'User name must be maximum 100 characters long'],
      },
      username: {
         type: String,
         trim: true,
         unique: true,
         lowercase: true,
         required: [true, 'Please provide a username'],
      },
      email: {
         type: String,
         validate: [valid.isEmail, 'Please provide a valid email address'],
         trim: true,
         lowercase: true,
         unique: [true, 'Found a registered user with this email'],
         required: [true, 'Please provide an email address'],
      },
      password: {
         type: String,
         required: [true, 'Please provide a strong password'],
         validate: {
            validator: value =>
               valid.isStrongPassword(value, {
                  minLength: 8,
                  minLowercase: 2,
                  minNumbers: 2,
                  minUppercase: 2,
                  minSymbols: 2,
               }),
            message:
               'Provided password is not strong enough. Provide atleast 8 characters with 2 uppercase, 2 lowercase, 2 numbers and 2 symbols',
         },
      },
      role: {
         type: String,
         enum: {
            values: ['creator', 'student'],
            message: '{VALUE} is not supported for user role',
         },
         minLength: [3, 'User role must be at least 3 characters long'],
         maxLenght: [100, 'User role must be maximum 100 characters long'],
      },
      image: {
         type: String,
         validate: [valid.isURL, 'Please provide a valid image url'],
      },
      auth: {
         loggedIn: {
            type: Boolean,
            default: false,
         },
         token: {
            type: String,
            default: '',
         },
         updatedAt: {
            type: Date,
            default: '',
         },
      },
   },
   {
      timestamps: true,
   }
);

userSchema.pre('save', function (next) {
   if (!this.password) return next();
   const pass = this.password;
   const hashed = bcrypt.hashSync(pass);
   this.password = hashed;
   next();
});

module.exports = userSchema;
