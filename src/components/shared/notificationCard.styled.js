import styled, { css } from 'styled-components';

export const NotificationCardContainer = styled.div`
   display: flex;
   align-items: center;
   gap: 1.5rem;
   padding: 0.5rem 1rem;
   border-radius: 1.25rem;
   cursor: pointer;
   transition: 0.1s ease;
   user-select: none;
   ${({ read }) =>
      !read
         ? css`
              background-color: #f2f5fa;
           `
         : null}

   &:hover {
      background-color: #f2f5fa;

      .buttons {
         display: inline-flex;
      }
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

   &.false {
      &::after {
         content: '';
         position: absolute;
         top: 0;
         right: 0;
         height: 1rem;
         width: 1rem;
         border-radius: 2rem;
         aspect-ratio: 1/1;
         background-color: #f08080;
      }
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

export const NotificationButtons = styled.div`
   display: none;
   align-items: center;
   justify-content: flex-end;
   position: absolute;
   bottom: 0;
   right: 0;
   gap: 0.5rem;
   z-index: 5;

   button {
      height: 2.8rem !important;
      width: 2.8rem !important;
      aspect-ratio: 1/1 !important;
      border-radius: 10rem;
      display: flex;
      align-items: center;
      justify-content: center;

      &:active {
         transform: scale(0.95);
      }

      svg {
         height: 1.6rem;
         width: auto;
         color: rgba(0, 0, 0, 0.95);
      }
   }

   .check {
      background-color: rgba(0, 200, 0, 0.2);

      &:hover {
         background-color: rgb(0, 200, 0);
      }
   }

   .delete {
      background-color: rgba(240, 128, 128, 0.2);

      &:hover {
         background-color: rgb(240, 128, 128);
      }
   }
`;
