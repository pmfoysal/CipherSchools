import styled, { css } from 'styled-components';

export const UserWindowContainer = styled.div``;

export const UserWindowImage = styled.img`
   height: 4.5rem;
   width: 4.5rem;
   border-radius: 10rem;
   overflow: hidden;
   cursor: pointer;
   transition: 0.15s ease;

   &:hover {
      opacity: 0.85;
   }

   &:active {
      transform: scale(0.975);
   }
`;

export const UserWindowPopup = styled.div`
   position: absolute;
   top: calc(100% + 2.5rem);
   right: -2rem;
   padding: 1.5rem;
   background-color: #ffffff;
   border-radius: 2rem;
   box-shadow: 0 0 1rem rgba(0, 0, 0, 0.025);
   width: 250px;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
`;

export const UserWindowImg = styled.img`
   height: 9rem;
   width: 9rem;
   border-radius: 10rem;
`;

export const UserWindowName = styled.h1`
   font-size: 2rem;
   color: rgba(0, 0, 0, 0.95);
   font-weight: 700;
   margin-top: 1.5rem;
`;

export const UserWindowRole = styled.h6`
   color: #f08080;
   font-weight: 550;
   font-size: 1.4rem;
   margin-top: 0.3rem;
`;

export const UserWindowLinks = styled.div`
   margin-top: 2rem;
   display: flex;
   flex-direction: column;
   gap: 0.5rem;
   width: 100%;
`;

export const UserWindowLink = styled.p`
   display: flex;
   align-items: center;
   gap: 0.5rem;
   width: 100%;
   padding: 0.5rem 1rem;
   border-radius: 0.8rem;
   cursor: pointer;
   user-select: none;
   transition: 0.15s ease;

   &:hover {
      background-color: #f2f5fa;
   }

   &:active {
      transform: scale(0.975);
   }

   ${({ danger }) =>
      danger
         ? css`
              background-color: #f08080;

              &:hover {
                 opacity: 0.85;
                 background-color: #f08080;
              }
           `
         : null}
`;
