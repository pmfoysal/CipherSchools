const auth = require('@services').auth;
const { sendRes } = require('@utilities');

exports.signup = async (req, res) => {
   sendRes(res, () => auth.signup(req.body));
};

exports.signin = async (req, res) => {
   sendRes(res, () => auth.signin(req.body));
};

exports.signout = async (req, res) => {
   sendRes(res, () => auth.signout(req.user._id));
};
