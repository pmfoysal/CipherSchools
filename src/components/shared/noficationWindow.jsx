import Button from './button';
import { useState } from 'react';
import { Icon } from '@iconify/react';
import { useNavigate } from 'react-router-dom';
import NotificationCard from './notificationCard';
import useGetNotifications from '@servers/useGetNotifications';
import {
   NotificationWindowContainer,
   NotificationWindowIcon,
   NotificationWindowPopup,
   NotificationWindowPopupTitle,
} from './noficationWindow.styled';

export default function NoficationWindow() {
   const navigate = useNavigate();
   const [open, setOpen] = useState(false);
   const { data } = useGetNotifications();

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
         {open && (
            <NotificationWindowPopup>
               <NotificationWindowPopupTitle>Notifications</NotificationWindowPopupTitle>
               {getRevised(data?.data)?.map(item => (
                  <NotificationCard key={item?._id} data={item} />
               ))}
               {getRevised(data?.data)?.length > 5 ? <Button name='See More' handler={() => navigate('/notifications')} /> : null}
            </NotificationWindowPopup>
         )}
      </NotificationWindowContainer>
   );
}
