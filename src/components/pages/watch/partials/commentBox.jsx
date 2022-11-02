import user from '../../../../assets/images/user.png';
import { CommentBoxButtons, CommentBoxContainer, CommentBoxContent, CommentBoxIcon, CommentBoxInput } from './commentBox.styled';

export default function CommentBox({ name }) {
   return (
      <CommentBoxContainer>
         <CommentBoxIcon>
            <img src={user} alt='user' />
         </CommentBoxIcon>
         <CommentBoxContent>
            <CommentBoxInput
               spellCheck='false'
               autoComplete='off'
               autoCorrect='off'
               placeholder='Write something...'
            ></CommentBoxInput>
            <CommentBoxButtons>
               <button className='reset'>Reset</button>
               <button className='submit'>{name}</button>
            </CommentBoxButtons>
         </CommentBoxContent>
      </CommentBoxContainer>
   );
}
