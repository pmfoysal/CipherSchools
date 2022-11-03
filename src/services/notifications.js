const notifications = require('@models').notifications;

exports.getNotifications = async query => {
   const temps = {
      page: Number(query?.page) - 1,
      limit: Number(query?.limit),
      fields: query?.fields?.replaceAll(/[, ]/g, ' '),
   };
   const result = await notifications.find(query?.filter).sort(query?.sort).select(temps.fields);
   if (!result?.length) throw new Error('No notifications found with these queries');
   return {
      totalItems: result?.length,
      totalPages: Math.ceil(result?.length / (temps?.limit || result?.length)),
      data: result,
   };
};

exports.patchNotifications = async (nId, data) => {
   const result = await notifications.updateOne({ _id: nId }, { isRead: data.isRead });
   if (!result.modifiedCount) throw new Error('No notification found with this id');
   return result;
};

exports.deleteNotifications = async nId => {
   const result = await notifications.deleteOne({ _id: nId });
   if (!result.deletedCount) throw new Error('No notification found with this id');
};
