import styled from 'styled-components';

export const SigninContainer = styled.div`
   width: 100%;
   min-height: 100vh;
   background-color: #f2f5fa;
   display: flex;
   align-items: center;
   justify-content: center;
`;

export const SigninContent = styled.div`
   width: 450px;
   padding: 3rem;
   border-radius: 2rem;
   background-color: #ffffff;
   box-shadow: 0 0 1rem rgba(0, 0, 0, 0.025);
   display: flex;
   flex-direction: column;
   align-items: center;

   .sign-link {
      color: rgba(0, 0, 0, 0.85);
      margin-top: 0.5rem;

      span {
         line-height: inherit;
         color: #f08080;
         font-size: inherit;
         font-weight: 550;
         cursor: pointer;
      }
   }
`;

export const SigninForm = styled.div`
   width: 100%;
   display: flex;
   flex-direction: column;
   gap: 2.5rem;
   margin-top: 5rem;
`;

export const SigninTitle = styled.h1`
   margin-top: 2rem;
   font-size: 2rem;
   color: rgba(0, 0, 0, 0.9);
   font-weight: 550;
`;

export const SigninDesc = styled.p`
   margin-top: 0.5rem;
   color: rgba(0, 0, 0, 0.85);
`;

export const SigninCheck = styled.label`
   display: inline-flex;
   align-items: center;
   gap: 0.5rem;
   user-select: none;
   cursor: pointer;
   font-size: 1.4rem;
   line-height: 1;
`;

export const SigninButtons = styled.div`
   margin-top: 3rem;
   width: 100%;
`;

export const SigninNote = styled.p`
   margin-top: 3rem;
   width: 100%;

   &,
   * {
      font-size: 1.3rem;
      color: rgba(0, 0, 0, 0.85);
   }

   strong {
      font-weight: 700;
   }

   span {
      color: #f08080;
      font-weight: 550;
      cursor: pointer;
   }
`;
