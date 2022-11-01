import styled from 'styled-components';

export const NotificationCardContainer = styled.div`
   display: flex;
   align-items: center;
   gap: 1.5rem;
   padding: 0.75rem 1rem;
   border-radius: 1.25rem;
   cursor: pointer;
   transition: 0.1s ease;

   &:hover {
      background-color: #f2f5fa;
   }
`;

export const NotificationCardIcon = styled.aside`
   display: flex;
   align-items: center;
   justify-content: center;
   background-color: rgba(240, 128, 128, 0.15);
   height: 4rem;
   width: 4rem;
   border-radius: 10rem;
   aspect-ratio: 1/1;

   svg {
      height: 2rem;
      width: auto;
      color: #f08080;
   }
`;

export const NotificationCardTexts = styled.aside``;

export const NotificationCardTitle = styled.h1`
   font-size: 1.4rem;
   font-weight: 550;
   color: rgba(0, 0, 0, 0.95);
   text-transform: none;
`;

export const NotificationCardDesc = styled.p`
   font-size: 1.2rem;
   font-weight: 400;
   color: rgba(0, 0, 0, 0.95);
   margin-top: 0.1rem;
`;
