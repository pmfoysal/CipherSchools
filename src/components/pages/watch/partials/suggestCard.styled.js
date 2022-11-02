import styled from 'styled-components';

export const SuggestCardContainer = styled.summary`
   display: flex;
   align-items: flex-start;
   gap: 1.5rem;
   background-color: #f2f5fa;
   padding: 1rem;
   cursor: pointer;
   border: 0.1rem solid rgba(0, 0, 0, 0.025);
   border-radius: 1.25rem;

   &:hover {
      h1 {
         color: #f08080;
      }
   }
`;

export const SuggestCardImage = styled.figure`
   width: 15rem;
   aspect-ratio: 2/1.25;
   height: auto;
   background-color: #ffffff;
   border-radius: 1rem;
`;

export const SuggestCardTexts = styled.div``;

export const SuggestCardTitle = styled.h1`
   font-size: 1.5rem;
   color: rgba(0, 0, 0, 0.95);
   transition: 0.1s ease;
`;

export const SuggestCardAuthor = styled.h3`
   font-size: 1.4rem;
   font-weight: 550;
   color: rgba(0, 0, 0, 0.85);
   margin-top: 0.5rem;
`;

export const SuggestCardInfo = styled.p`
   font-size: 1.3rem;
   color: rgba(0, 0, 0, 0.9);
   margin-top: 0rem;
`;
