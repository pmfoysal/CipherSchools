import Button from './button';
import { useState } from 'react';
import { Icon } from '@iconify/react';
import NotificationCard from './notificationCard';
import {
   NotificationWindowContainer,
   NotificationWindowIcon,
   NotificationWindowPopup,
   NotificationWindowPopupTitle,
} from './noficationWindow.styled';

export default function NoficationWindow() {
   const [open, setOpen] = useState(false);

   function openHandler() {
      setOpen(prev => !prev);
   }

   return (
      <NotificationWindowContainer>
         <NotificationWindowIcon className={open} onClick={openHandler}>
            <Icon icon='bi:bell' />
         </NotificationWindowIcon>
         <span className='badge'>5</span>
         {open && (
            <NotificationWindowPopup>
               <NotificationWindowPopupTitle>Notifications</NotificationWindowPopupTitle>
               <NotificationCard />
               <NotificationCard />
               <NotificationCard />
               <NotificationCard />
               <NotificationCard />
               <Button name='See More' handler={() => {}} />
            </NotificationWindowPopup>
         )}
      </NotificationWindowContainer>
   );
}
