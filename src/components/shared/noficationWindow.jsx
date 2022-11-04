import { useState } from 'react';
import { Icon } from '@iconify/react';
import NotificationCard from './notificationCard';
import useGetNotifications from '@servers/useGetNotifications';
import {
   NotificationWindowContainer,
   NotificationWindowIcon,
   NotificationWindowPopup,
   NotificationWindowPopupTitle,
} from './noficationWindow.styled';

export default function NoficationWindow() {
   const [open, setOpen] = useState(false);
   const { data, refetch } = useGetNotifications({ refetchInterval: 2000 });

   function openHandler() {
      setOpen(prev => !prev);
   }

   function getRevised(data) {
      return data?.filter(item => item?.isRead === false);
   }

   return (
      <NotificationWindowContainer>
         <NotificationWindowIcon className={open} onClick={openHandler}>
            <Icon icon='bi:bell' />
         </NotificationWindowIcon>
         <span className='badge'>{getRevised(data?.data)?.length || '0'}</span>
         {open && data?.data?.length ? (
            <NotificationWindowPopup>
               <NotificationWindowPopupTitle>Notifications</NotificationWindowPopupTitle>
               <div>
                  {data?.data?.map(item => (
                     <NotificationCard key={item?._id} data={item} refetch={refetch} />
                  ))}
               </div>
            </NotificationWindowPopup>
         ) : null}
      </NotificationWindowContainer>
   );
}
