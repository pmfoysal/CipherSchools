import { Icon } from '@iconify/react';
import { toast } from 'react-toastify';
import { useEffect, useState } from 'react';
import NotificationCard from './notificationCard';
import useGetNotifications from '@servers/useGetNotifications';
import { NotificationWindowContainer, NotificationWindowIcon } from './noficationWindow.styled';
import { NotificationWindowPopup, NotificationWindowPopupTitle } from './noficationWindow.styled';

export default function NoficationWindow() {
   const [open, setOpen] = useState(false);
   const [current, setCurrent] = useState(0);
   const { data, refetch } = useGetNotifications();

   function openHandler() {
      setOpen(prev => !prev);
   }

   function getRevised(data) {
      return data?.filter(item => item?.isRead === false);
   }

   useEffect(() => {
      const diff = data?.data?.length - current;
      if (diff > 0) {
         const title = getRevised(data?.data)?.reverse()?.[0]?.title;
         toast.info(title);
         setCurrent(data?.data?.length);
      }
   }, [data]);

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
