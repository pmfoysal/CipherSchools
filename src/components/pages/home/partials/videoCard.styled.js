import styled from 'styled-components';

export const VideoCardContainer = styled.article`
   width: 100%;
   border-radius: 1.5rem;
   background-color: #f2f5fa;
   overflow: hidden;
   box-shadow: 0 0 1rem rgba(0, 0, 0, 0.025);
   padding: 1.5rem;
   cursor: pointer;
   border: 0.1rem solid rgba(0, 0, 0, 0.025);

   &:hover {
      h1 {
         color: #f08080;
      }
   }
`;

export const VideoCardImage = styled.figure`
   width: 100%;
   aspect-ratio: 1.7/1;
   overflow: hidden;
   border-radius: 1.2rem;

   img {
      width: 100%;
      height: 100%;
      object-fit: cover;
   }
`;

export const VideoCardDetails = styled.summary`
   width: 100%;
   display: flex;
   gap: 1.5rem;
   margin-top: 1.5rem;
`;

export const VideoCardIcon = styled.aside`
   display: flex;
   justify-content: center;
   align-items: flex-start;

   img {
      height: 3.5rem;
      width: 3.5rem;
      border-radius: 10rem;
   }
`;

export const VideoCardTexts = styled.aside``;

export const VideoCardTitle = styled.h1`
   font-size: 1.5rem;
   color: rgba(0, 0, 0, 0.95);
   transition: 0.15s ease;
`;

export const VideoCardAuthor = styled.h3`
   margin-top: 0.75rem;

   &,
   * {
      font-size: 1.4rem;
      font-weight: 550;
      color: rgba(0, 0, 0, 0.85);
   }

   span {
      line-height: inherit;
      text-transform: lowercase;
      color: rgba(0, 0, 0, 0.95);
      font-weight: 700;
   }
`;

export const VideoCardInfo = styled.p`
   font-size: 1.4rem;
   font-weight: 400;
   color: rgba(0, 0, 0, 0.85);
`;
