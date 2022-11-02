import styled from 'styled-components';

export const CommentBoxContainer = styled.div`
   display: flex;
   gap: 1.5rem;
`;

export const CommentBoxIcon = styled.aside`
   img {
      height: 4rem;
      width: 4rem;
      border-radius: 10rem;
   }
`;

export const CommentBoxContent = styled.aside`
   flex-grow: 1;
`;

export const CommentBoxInput = styled.textarea`
   height: 8rem;
   width: 100%;
   resize: none;
   padding: 1rem;
   color: rgba(0, 0, 0, 1);
   font-size: 1.5rem;
   border: 0.1rem solid rgba(0, 0, 0, 0.2);
   border-radius: 1rem;
   transition: 0.1s ease;
   line-height: 1.25;

   &::placeholder {
      font-size: 1.5rem;
      font-weight: 400;
   }

   &:focus {
      border-color: #f08080;
   }
`;

export const CommentBoxButtons = styled.div`
   display: flex;
   align-items: center;
   justify-content: flex-end;
   gap: 1rem;
   margin-top: 1rem;

   button {
      height: 3rem;
      min-width: 7rem;
      padding: 0 1.25rem;
      border-radius: 0.7rem;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.3rem;
      transition: 0.1s ease;

      &:hover {
         opacity: 0.85;
      }

      &:active {
         transform: scale(0.975);
      }
   }

   .submit {
      background-color: #f08080;
      color: rgba(0, 0, 0, 0.95);
   }

   .reset {
      background-color: rgba(0, 0, 0, 0.95);
      color: rgba(255, 255, 255, 0.95);
   }
`;
