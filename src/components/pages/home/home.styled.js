import styled from 'styled-components';

export const HomeContainer = styled.section`
   width: 100%;
   background-color: #ffffff;
   padding: 2.5rem;
   border-radius: 2rem;
   margin: 2rem 0 3rem;
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
`;
