import styled from 'styled-components';

export const WatchContainer = styled.section`
   display: flex;
   align-items: flex-start;
   gap: 3rem;
   margin-bottom: 3rem;
`;

export const WatchLeft = styled.aside`
   background-color: #ffffff;
   border-radius: 2rem;
   padding: 2rem;
   margin-top: 2rem;
   width: 100%;
   flex-grow: 1;
   box-shadow: 0 0 1rem rgba(0, 0, 0, 0.025);
`;

export const WatchPlayer = styled.main`
   width: 100%;
   aspect-ratio: 16/9;
   background-color: #f2f5fa;
   border-radius: 1.5rem;
   border: 0.1rem solid rgba(0, 0, 0, 0.025);
`;

export const WatchTexts = styled.article`
   margin-top: 1.75rem;
`;

export const WatchTitle = styled.h1`
   font-size: 2.4rem;
   color: rgba(0, 0, 0, 0.95);
`;

export const WatchInfos = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-between;
   gap: 3rem;
   margin-top: 1.75rem;
`;

export const WatchInfosLeft = styled.aside`
   display: flex;
   align-items: center;
   gap: 1.5rem;

   .subscribe {
      height: 3.6rem;
      font-size: 1.4rem;
      padding: 0 2rem;
      margin-left: 1rem;
   }

   .alert {
      aspect-ratio: 1/1;
      height: 4rem;
      background-color: transparent;
      margin-left: -1rem;

      &:hover {
         background-color: #f2f5fa;
      }

      svg {
         height: 2rem;
         width: auto;
      }
   }
`;

export const WatchInfosLeftIcon = styled.figure`
   img {
      height: 4.5rem;
      width: 4.5rem;
      border-radius: 10rem;
      aspect-ratio: 1/1;
   }
`;

export const WatchInfosLeftTexts = styled.div`
   h3 {
      color: rgba(0, 0, 0, 0.95);
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-size: 1.8rem;
      white-space: nowrap;
   }

   span {
      text-transform: lowercase;
      line-height: inherit;
      font-size: inherit;
      font-weight: 400;
      color: #f08080;
   }

   p {
      color: rgba(0, 0, 0, 0.9);
      font-size: 1.4rem;
      white-space: nowrap;
   }
`;

export const WatchInfosRight = styled.aside`
   display: flex;
   align-items: center;
   gap: 1.5rem;
   justify-content: flex-end;

   button {
      height: 3.6rem;
      padding: 0 2rem;
      width: unset;
      font-size: 1.4rem;
   }
`;

export const WatchInfosLikes = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-between;
   height: 3.6rem;
   border-radius: 10rem;
   background-color: #f2f5fa;
   overflow: hidden;

   button {
      background-color: transparent;
      border-radius: 0;
      padding: 0 1.5rem;
   }

   span {
      height: 2.5rem;
      width: 0.1rem;
      background-color: rgba(0, 0, 0, 0.15);
   }
`;

export const WatchDescs = styled.p`
   margin-top: 2.5rem;
   padding: 1rem 1.5rem;
   background-color: #f2f5fa;
   border-radius: 1rem;
   display: flex;
   flex-direction: column;
   gap: 1rem;
   font-size: 1.5rem;
   color: rgba(0, 0, 0, 0.85);

   span {
      font-weight: 550;
      font-size: inherit;
      line-height: inherit;
      color: inherit;
   }
`;

export const WatchComments = styled.div``;

export const WatchCommentsTitle = styled.h2`
   margin-top: 2rem;
   font-size: 1.7rem;
   color: rgba(0, 0, 0, 0.9);
`;

export const WatchCommentsCards = styled.div`
   display: flex;
   flex-direction: column;
   gap: 1.5rem;
`;

export const WatchRight = styled.aside`
   width: 550px;
   margin-top: 2rem;
`;

export const WatchRightTop = styled.div`
   background-color: #ffffff;
   border-radius: 2rem;
   padding: 2rem;
   width: 100%;
   box-shadow: 0 0 1rem rgba(0, 0, 0, 0.025);
`;

export const WatchRightBottom = styled.div`
   background-color: #ffffff;
   border-radius: 2rem;
   padding: 2rem;
   margin-top: 3rem;
   width: 100%;
   box-shadow: 0 0 1rem rgba(0, 0, 0, 0.025);
`;

export const WatchRightTitle = styled.h2`
   font-size: 1.7rem;
   color: rgba(0, 0, 0, 0.95);
`;

export const WatchRightCards = styled.div`
   margin-top: 2rem;
   display: flex;
   flex-direction: column;
   gap: 1.25rem;
`;
