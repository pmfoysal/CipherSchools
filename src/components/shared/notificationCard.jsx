import { Icon } from '@iconify/react';
import {
   NotificationCardContainer,
   NotificationCardDesc,
   NotificationCardIcon,
   NotificationCardTexts,
   NotificationCardTitle,
} from './notificationCard.styled';

export default function NotificationCard() {
   return (
      <NotificationCardContainer>
         <NotificationCardIcon>
            <Icon icon='bi:bell' />
         </NotificationCardIcon>
         <NotificationCardTexts>
            <NotificationCardTitle>John Doe likes your video: Something went wrong!</NotificationCardTitle>
            <NotificationCardDesc>2 minutes ago</NotificationCardDesc>
         </NotificationCardTexts>
      </NotificationCardContainer>
   );
}
