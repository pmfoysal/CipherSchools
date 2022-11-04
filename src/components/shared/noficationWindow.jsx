import { Icon } from '@iconify/react';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import NotificationCard from './notificationCard';
import useGetNotifications from '@servers/useGetNotifications';
import { NotificationWindowContainer, NotificationWindowIcon } from './noficationWindow.styled';
import { NotificationWindowPopup, NotificationWindowPopupTitle } from './noficationWindow.styled';

export default function NoficationWindow() {
   const { pathname } = useLocation();
   const [open, setOpen] = useState(false);
   const { data, refetch } = useGetNotifications({ refetchInterval: 1000 });

   function openHandler() {
      setOpen(prev => !prev);
   }

   function getRevised(data) {
      return data?.filter(item => item?.isRead === false);
   }

   useEffect(() => {
      setOpen(false);
   }, [pathname]);

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
                  {[...data?.data].reverse().map(item => (
                     <NotificationCard key={item?._id} data={item} refetch={refetch} />
                  ))}
               </div>
            </NotificationWindowPopup>
         ) : null}
      </NotificationWindowContainer>
   );
}
