import Button from '@shared/button';
import { useContext, useEffect, useState } from 'react';
import userImg from '../../../../assets/images/user.png';
import creatorImg from '../../../../assets/images/creator.png';
import {
   CommentCardButtons,
   CommentCardContainer,
   CommentCardDesc,
   CommentCardIcon,
   CommentCardLikeDislike,
   CommentCardTexts,
   CommentCardTitle,
} from './commentCard.styled';
import api from '@middlewares/api';
import CommentBox from './commentBox';
import getTime from '@utilities/getTime';
import { StoreContext } from '@contexts/storeProvider';

export default function CommentCard({ children, reply, data = {}, refetch, vId, replyId }) {
   const [open, setOpen] = useState(false);
   const [disable, setDisable] = useState(true);
   const { user } = useContext(StoreContext);
   const [newComment, setNewComment] = useState('');

   function openHandler() {
      setOpen(prev => !prev);
   }

   function infoBtnHandler(name) {
      return async function () {
         await api.post(`/videos/${vId}/comments/${data?._id}/${name}`);
         if (refetch) refetch();
      };
   }

   function getLikeIcon(likes) {
      if (likes?.includes(user?._id)) {
         return 'fluent:thumb-like-24-filled';
      }
      return 'fluent:thumb-like-24-regular';
   }

   function getDislikeIcon(dislikes) {
      if (dislikes?.includes(user?._id)) {
         return 'fluent:thumb-dislike-24-filled';
      }
      return 'fluent:thumb-dislike-24-regular';
   }

   async function replyHandler() {
      setDisable(true);
      await api.post(`/videos/${vId}/comments/${replyId}/reply`, { content: newComment });
      setDisable(false);
      setNewComment('');
      refetch();
   }

   useEffect(() => {
      if (newComment) setDisable(false);
      else setDisable(true);
   }, [newComment]);

   return (
      <CommentCardContainer>
         <div className='main'>
            <CommentCardIcon>
               <img src={data?.user?.role === 'student' ? userImg : creatorImg} alt='user' />
            </CommentCardIcon>
            <CommentCardTexts>
               <CommentCardTitle>
                  {data?.user?.name}
                  <span className='username'>@{data?.user?.username}</span>
                  &bull;
                  <span className='time'>{getTime(data?.createdAt)}</span>
               </CommentCardTitle>
               <CommentCardDesc>{data?.content}</CommentCardDesc>
               <CommentCardButtons>
                  <CommentCardLikeDislike>
                     <Button
                        className='like'
                        name={data?.likes?.length}
                        icon={getLikeIcon(data?.likes)}
                        handler={infoBtnHandler('like')}
                        faded
                        round
                     />
                     <span></span>
                     <Button
                        className='like'
                        name={data?.dislikes?.length}
                        icon={getDislikeIcon(data?.dislikes)}
                        handler={infoBtnHandler('dislike')}
                        faded
                        round
                     />
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
               <CommentBox
                  name='Reply'
                  setter={setNewComment}
                  value={newComment}
                  handler={replyHandler}
                  user={user}
                  disable={disable}
               />
               {children}
            </div>
         ) : null}
      </CommentCardContainer>
   );
}
