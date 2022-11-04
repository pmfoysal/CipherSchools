import styled from 'styled-components';

export const TextboxContainer = styled.div`
   width: 100%;
   display: flex;
   flex-direction: column;
   gap: 1rem;

   span {
      font-size: 1.5rem;
      font-weight: 550;
      color: rgba(0, 0, 0, 0.8);
      margin-left: 0.3rem;
   }

   textarea {
      width: 100%;
      resize: none;
      border-radius: 1rem;
      border: 0.1rem solid rgba(0, 0, 0, 0.025);
      background-color: #ffffff;
      padding: 0.75rem 1rem;
      line-height: 1.5;
      font-weight: 400;
      transition: 0.1s ease;

      &:focus {
         border-color: #f08080;
      }

      &::placeholder {
         line-height: inherit;
         font-size: 1.5rem;
         color: rgba(0, 0, 0, 0.5);
         font-weight: 400;
      }
   }
`;
