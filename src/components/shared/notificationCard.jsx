import { Icon } from '@iconify/react';
import getTime from '@utilities/getTime';
import {
   NotificationCardContainer,
   NotificationCardDesc,
   NotificationCardIcon,
   NotificationCardTexts,
   NotificationCardTitle,
} from './notificationCard.styled';

export default function NotificationCard({ data }) {
   return (
      <NotificationCardContainer>
         <NotificationCardIcon>
            <Icon icon='bi:bell' />
         </NotificationCardIcon>
         <NotificationCardTexts>
            <NotificationCardTitle>{data?.title}</NotificationCardTitle>
            <NotificationCardDesc>{getTime(data?.createdAt)}</NotificationCardDesc>
         </NotificationCardTexts>
      </NotificationCardContainer>
   );
}
