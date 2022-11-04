import styled from 'styled-components';

export const HomeContainer = styled.section`
   width: 100%;
   background-color: #ffffff;
   padding: 2.5rem;
   border-radius: 2rem;
   margin: 2rem 0 3rem;

   @media screen and (max-width: 600px) {
      padding: 2.5rem 2rem;
   }

   @media screen and (max-width: 450px) {
      padding: 2.5rem 1rem;
   }
`;

export const HomeTitle = styled.h1`
   font-size: 2.5rem;
   font-weight: 700;
   color: rgba(0, 0, 0, 0.95);
   text-transform: none;
   padding-bottom: 2.5rem;
`;

export const HomeCards = styled.div`
   width: 100%;
   display: grid;
   grid-template-columns: repeat(4, 1fr);
   gap: 2.5rem;

   @media screen and (max-width: 1420px) {
      grid-template-columns: repeat(3, 1fr);
   }

   @media screen and (max-width: 1080px) {
      grid-template-columns: repeat(2, 1fr);
   }

   @media screen and (max-width: 760px) {
      grid-template-columns: repeat(1, 1fr);
      align-items: center;
      justify-items: center;

      & > * {
         max-width: 50rem;
      }
   }
`;
