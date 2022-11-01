import styled from 'styled-components';

export const InputboxContainer = styled.div`
   width: 100%;
`;

export const InputboxInput = styled.input`
   height: 4.6rem;
   width: 100%;
   border-radius: 0.8rem;
   border: 0.2rem solid rgba(0, 0, 0, 0.15);
   background-color: transparent;
   padding: 0 1.5rem;
   font-weight: 550;
   transition: 0.2s ease;
   color: rgba(0, 0, 0, 0.95);

   &[data-on='true'] {
      & + p {
         top: 0;
         opacity: 1;
         line-height: 1;
         padding-top: 0.4rem;
      }
   }

   &:focus {
      border-color: #f08080;

      & + p {
         background-color: #f08080;
      }
   }

   &::placeholder {
      text-transform: none;
   }
`;

export const InputboxName = styled.p`
   position: absolute;
   pointer-events: none;
   text-transform: capitalize;
   transition: 0.2s ease;
   top: 50%;
   right: 2rem;
   transform: translateY(-50%);
   font-size: 1.2rem;
   font-weight: 550;
   color: rgba(0, 0, 0, 0.85);
   background-color: #f08080;
   padding: 0.35rem 0.8rem 0.45rem;
   border-radius: 1rem;
   line-height: 1;
   opacity: 0;
`;
