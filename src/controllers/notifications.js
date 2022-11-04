const { sendRes } = require('@utilities');
const notifications = require('@services').notifications;

// exports.postNotifications = async (req, res) => {
//    sendRes(res, () => notifications.postNotifications(req.body));
// };

exports.getNotifications = async (req, res) => {
   sendRes(res, () => notifications.getNotifications(req.user._id, req.params));
};

exports.patchNotifications = async (req, res) => {
   sendRes(res, () => notifications.patchNotifications(req.params.nId, req.body));
};

exports.deleteNotifications = async (req, res) => {
   sendRes(res, () => notifications.deleteNotifications(req.params.nId));
};
