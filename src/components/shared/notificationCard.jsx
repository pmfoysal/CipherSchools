import api from '@middlewares/api';
import { Icon } from '@iconify/react';
import getTime from '@utilities/getTime';
import {
   NotificationButtons,
   NotificationCardContainer,
   NotificationCardDesc,
   NotificationCardIcon,
   NotificationCardTexts,
   NotificationCardTitle,
} from './notificationCard.styled';

export default function NotificationCard({ data, refetch }) {
   async function readHandler() {
      await api.patch(`/notifications/${data?._id}`, { isRead: true });
      if (refetch) refetch();
   }

   async function deleteHandler() {
      await api.delete(`/notifications/${data?._id}`);
      if (refetch) refetch();
   }

   return (
      <NotificationCardContainer read={data?.isRead}>
         <NotificationCardIcon className={`${data?.isRead}`}>
            <Icon icon='bi:bell' />
         </NotificationCardIcon>
         <NotificationCardTexts>
            <NotificationCardTitle>{data?.title}</NotificationCardTitle>
            <NotificationCardDesc>{getTime(data?.createdAt)}</NotificationCardDesc>
         </NotificationCardTexts>
         <NotificationButtons className='buttons'>
            {!data?.isRead ? (
               <button className='check' onClick={readHandler}>
                  <Icon icon='fluent:checkmark-24-filled' />
               </button>
            ) : null}
            <button className='delete' onClick={deleteHandler}>
               <Icon icon='fluent:delete-24-regular' />
            </button>
         </NotificationButtons>
      </NotificationCardContainer>
   );
}
