import styled, { css } from 'styled-components';

export const ButtonContainer = styled.button`
   display: inline-flex;
   align-items: center;
   justify-content: center;
   gap: 0.5rem;
   height: 4.5rem;
   width: 100%;
   font-weight: 550;
   border: 0.2rem solid rgba(0, 0, 0, 0.95);
   background-color: rgba(0, 0, 0, 0.95);
   color: rgba(255, 255, 255, 0.9);
   border-radius: ${({ round }) => (round ? '20rem' : '0.8rem')};
   transition: 0.1s ease;

   svg {
      height: 1.8rem;
      width: auto;
   }

   ${({ main }) =>
      main
         ? css`
              border: 0.2rem solid #f08080;
              background-color: #f08080;
              color: rgba(0, 0, 0, 0.95);
           `
         : null};

   ${({ faded }) =>
      faded
         ? css`
              border: 0.2rem solid transparent;
              background-color: #f2f5fa;
              color: rgba(0, 0, 0, 0.95);
           `
         : null};

   &:hover:not(:disabled) {
      opacity: 0.85;
   }

   &:active:not(:disabled) {
      transform: scale(0.975);
   }

   &:disabled {
      opacity: 0.5;
      cursor: default;
   }
`;
