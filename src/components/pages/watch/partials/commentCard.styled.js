import styled from 'styled-components';

export const CommentCardContainer = styled.summary`
   background-color: #f2f5fa;
   border-radius: 1.5rem;
   padding: 1.5rem;

   .main {
      display: flex;
      gap: 1.5rem;
   }

   .nested {
      display: flex;
      flex-direction: column;
      gap: 1.75rem;
      padding: 2rem 0 0 5.5rem;

      & > * {
         padding: 0;
      }
   }
`;

export const CommentCardIcon = styled.figure`
   img {
      height: 4rem;
      width: 4rem;
      border-radius: 10rem;
   }
`;

export const CommentCardTexts = styled.div``;

export const CommentCardTitle = styled.h1`
   font-size: 1.5rem;
   font-weight: 700;
   color: rgba(0, 0, 0, 0.9);
   display: flex;
   align-items: center;
   gap: 0.5rem;

   .username {
      font-weight: 400;
      font-size: 1.4rem;
      color: #f08080;
      line-height: inherit;
      font-size: inherit;
      text-transform: lowercase;
   }

   .time {
      font-size: 1.4rem;
      font-weight: 400;
      color: rgba(0, 0, 0, 0.85);
      line-height: inherit;
      text-transform: lowercase;
   }
`;

export const CommentCardDesc = styled.p`
   font-size: 1.5rem;
   color: rgba(0, 0, 0, 0.85);
   margin-top: 0.4rem;
`;

export const CommentCardButtons = styled.div`
   display: flex;
   gap: 1rem;
   align-items: center;
   margin-top: 1rem;

   button {
      width: unset;
      height: 2.8rem;
      font-size: 1.2rem;
      background-color: #ffffff;

      svg {
         height: 1.6rem;
      }
   }

   .reply {
      padding: 0 1.25rem;
   }
`;

export const CommentCardLikeDislike = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-between;
   border-radius: 10rem;
   background-color: #ffffff;
   overflow: hidden;

   button {
      background-color: transparent;
      border-radius: 0;
      padding: 0 0.75rem;
   }

   span {
      height: 1.5rem;
      width: 0.1rem;
      background-color: rgba(0, 0, 0, 0.15);
   }
`;
