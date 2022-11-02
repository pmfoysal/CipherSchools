import { useState } from 'react';
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
import CommentBox from './commentBox';

export default function CommentCard({ children, reply }) {
   const [open, setOpen] = useState(false);

   function openHandler() {
      setOpen(prev => !prev);
   }

   return (
      <CommentCardContainer>
         <div className='main'>
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
                  {!reply ? (
                     <Button
                        icon={open ? 'fluent:chevron-up-24-filled' : 'fluent:chevron-down-24-filled'}
                        className='reply'
                        name={`${children?.length || '0'} Replies`}
                        loading={''}
                        handler={openHandler}
                        faded
                        round
                     />
                  ) : null}
               </CommentCardButtons>
            </CommentCardTexts>
         </div>
         {open && !reply ? (
            <div className='nested'>
               <CommentBox name='Reply' />
               {children}
            </div>
         ) : null}
      </CommentCardContainer>
   );
}
