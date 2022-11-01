import styled from 'styled-components';

export const SearchboxContainer = styled.div`
   display: flex;
   align-items: center;
   width: 80%;
   margin: 0 auto;
   border-radius: 0.8rem;
   background-color: #f2f5fa;
   overflow: hidden;
`;

export const SearchboxContent = styled.input`
   height: 4.2rem;
   padding: 0 1.5rem;
   background-color: transparent;
   color: rgba(0, 0, 0, 0.95);
   font-weight: 550;
   text-transform: none;
   flex-grow: 1;

   &::placeholder {
      color: rgba(0, 0, 0, 0.5);
      font-size: 1.4rem;
      font-weight: 400;
   }
`;

export const SearchboxButton = styled.button`
   height: 4.2rem;
   aspect-ratio: 2/1.25;
   display: flex;
   align-items: center;
   justify-content: center;
   background-color: #f08080;
   transition: 0.15s ease;

   &:hover {
      opacity: 0.85;
   }

   svg {
      height: 2.2rem;
      width: auto;
      color: rgba(0, 0, 0, 0.95);
   }
`;
