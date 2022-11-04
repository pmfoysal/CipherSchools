import userImg from '../../../../assets/images/user.png';
import creatorImg from '../../../../assets/images/creator.png';
import { CommentBoxButtons, CommentBoxContainer, CommentBoxContent, CommentBoxIcon, CommentBoxInput } from './commentBox.styled';

export default function CommentBox({ name, user, value, setter, handler, disable }) {
   return (
      <CommentBoxContainer>
         <CommentBoxIcon>
            <img src={user?.role === 'student' ? userImg : creatorImg} alt='user' />
         </CommentBoxIcon>
         <CommentBoxContent>
            <CommentBoxInput
               spellCheck='false'
               autoComplete='off'
               autoCorrect='off'
               placeholder='Write something...'
               value={value}
               onChange={e => setter(e.target.value)}
            ></CommentBoxInput>
            <CommentBoxButtons>
               <button className='reset' onClick={() => setter('')}>
                  Reset
               </button>
               <button className='submit' onClick={handler} disabled={disable}>
                  {name}
               </button>
            </CommentBoxButtons>
         </CommentBoxContent>
      </CommentBoxContainer>
   );
}
