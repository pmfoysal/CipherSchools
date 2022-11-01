import { Icon } from '@iconify/react';
import { useEffect, useState } from 'react';
import user from '../../assets/images/user.png';
import {
   UserWindowContainer,
   UserWindowImage,
   UserWindowImg,
   UserWindowLink,
   UserWindowLinks,
   UserWindowName,
   UserWindowPopup,
   UserWindowRole,
} from './userWindow.styled';
import { useLocation } from 'react-router-dom';

export default function UserWindow() {
   const location = useLocation();
   const [open, setOpen] = useState(false);

   function openHandler() {
      setOpen(prev => !prev);
   }

   useEffect(() => {
      setOpen(false);
   }, [location]);

   return (
      <UserWindowContainer>
         <UserWindowImage src={user} alt='user' onClick={openHandler} />
         {open && (
            <UserWindowPopup>
               <UserWindowImg src={user} alt='user' />
               <UserWindowName>Foysal Ahmmed</UserWindowName>
               <UserWindowRole>Creator</UserWindowRole>
               <UserWindowLinks>
                  <UserWindowLink onClick={() => {}}>
                     <Icon icon='bytesize:bell' />
                     Notifications
                  </UserWindowLink>
                  <UserWindowLink danger onClick={() => {}}>
                     <Icon icon='mi:log-out' />
                     Signout
                  </UserWindowLink>
               </UserWindowLinks>
            </UserWindowPopup>
         )}
      </UserWindowContainer>
   );
}
