import styled from 'styled-components';

export const HeaderContainer = styled.header`
   padding: 1.5rem;
`;

export const HeaderContent = styled.main`
   max-width: 1500px;
   margin: 0 auto;
   background-color: #ffffff;
   border-radius: 2rem;
   padding: 1.75rem 2rem;
   box-shadow: 0 0 1rem rgba(0, 0, 0, 0.025);
   display: grid;
   grid-template-columns: repeat(3, 1fr);
`;

export const HeaderLeft = styled.div``;

export const HeaderMiddle = styled.div`
   align-items: center;
   justify-content: center;
`;

export const HeaderRight = styled.div`
   height: 100%;
   width: 100%;
   display: flex;
   align-items: center;
   justify-content: flex-end;
   gap: 2.5rem;
`;
