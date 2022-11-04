import styled from 'styled-components';

export const UploadContainer = styled.section`
   padding: 2.5rem;
   border-radius: 2rem;
   background-color: #ffffff;
   margin: 2rem 0 3rem;
`;

export const UploadTitle = styled.h1`
   font-size: 2.5rem;
   font-weight: 700;
   text-align: center;
   color: rgba(0, 0, 0, 0.95);
   text-transform: none;
   padding-bottom: 2.5rem;
`;

export const UploadContent = styled.main`
   padding-top: 1rem;
   width: 100%;
   display: flex;
   align-items: center;
   justify-content: center;
`;

export const UploadForm = styled.div`
   padding: 3rem;
   border-radius: 2rem;
   background-color: #f2f5fa;
   width: 70rem;
   border: 0.1rem solid rgba(0, 0, 0, 0.025);
   display: flex;
   flex-direction: column;
   gap: 2rem;
   margin-bottom: 2rem;

   .buttons {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      gap: 2rem;
      margin-top: 1.5rem;
   }
`;
