import Button from '@shared/button';
import user from '../../../../assets/images/user.png';
import {
   CommentCardButtons,
   CommentCardContainer,
   CommentCardDesc,
   CommentCardIcon,
   CommentCardLikeDislike,
   CommentCardTexts,
   CommentCardTitle,
} from './commentCard.styled';

export default function CommentCard() {
   return (
      <CommentCardContainer>
         <CommentCardIcon>
            <img src={user} alt='user' />
         </CommentCardIcon>
         <CommentCardTexts>
            <CommentCardTitle>
               Foysal Ahmmed
               <span className='username'>@foysal</span>
               &bull;
               <span className='time'>2 minutes ago</span>
            </CommentCardTitle>
            <CommentCardDesc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, voluptatem.</CommentCardDesc>
            <CommentCardButtons>
               <CommentCardLikeDislike>
                  <Button className='like' name='64K' icon='fluent:thumb-like-24-regular' handler={() => {}} faded round />
                  <span></span>
                  <Button className='like' name='14K' icon='fluent:thumb-dislike-24-regular' handler={() => {}} faded round />
               </CommentCardLikeDislike>
               <Button className='reply' name='0 Replies' loading={''} handler={() => {}} faded round />
            </CommentCardButtons>
         </CommentCardTexts>
      </CommentCardContainer>
   );
}
