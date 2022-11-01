import styled from 'styled-components';

export const SignupRole = styled.div`
   display: flex;
   flex-direction: column;
   gap: 0.75rem;

   span {
      margin-left: 0.2rem;
      font-size: 1.4rem;
      color: rgba(0, 0, 0, 0.95);
      font-weight: 550;
   }
`;

export const SignupOptions = styled.select`
   border: 0.2rem solid rgba(0, 0, 0, 0.15);
   height: 4.6rem;
   width: 100%;
   border-radius: 0.8rem;
   padding: 0 1rem;

   option {
      color: rgba(0, 0, 0, 0.9);
   }
`;
