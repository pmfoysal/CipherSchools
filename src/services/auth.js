const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const users = require('@models').users;

exports.signup = async data => {
   if (data?.auth !== undefined) {
      throw new Error('Please remove auth property, it will add automatically!');
   }
   return await users.create(data);
};

exports.signin = async data => {
   if (!data?.email) throw new Error('Please provide an email address');
   if (!data?.password) throw new Error('Please provide a password');

   const user = await users.findOne({ email: data?.email });
   if (!user) throw new Error('No registered user is found with this email');
   if (!bcrypt.compareSync(data?.password, user?.password)) throw new Error('Password is not matched');
   const temp = { _id: user?._id, name: user?.name, email: user?.email, role: user?.role };
   const token = jwt.sign(temp, process.env.JWT_SECRET, { expiresIn: '1d' });

   await users.updateOne({ _id: user?._id }, { auth: { loggedIn: true, token, updatedAt: new Date().toISOString() } });
   return { token };
};

exports.signout = async id => {
   const result = await users.updateOne(
      { _id: id },
      { auth: { loggedIn: false, token: '', updatedAt: new Date().toISOString() } }
   );
   if (!result.modifiedCount) throw new Error('No users found to signout');
   return { loggedIn: false };
};
