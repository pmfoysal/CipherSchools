import CommentBox from './commentBox';
import CommentCard from './commentCard';
import useGetComments from '@servers/useGetComments';
import { WatchComments, WatchCommentsCards, WatchCommentsTitle } from '../watch.styled';
import api from '@middlewares/api';
import { useEffect, useState } from 'react';

export default function WatchCommentsComp({ vId, user }) {
   const { data, refetch } = useGetComments(vId, { enabled: !!vId });
   const [newComment, setNewComment] = useState('');
   const [disable, setDisable] = useState(true);

   function countComments(comments = []) {
      let count = comments?.length;
      comments?.forEach(item => {
         if (item?.replies?.length) {
            count += item?.replies?.length;
         }
      });
      return count;
   }

   function reverseData(data) {
      return [...data].reverse();
   }

   async function postComment() {
      setDisable(true);
      await api.post(`/videos/${vId}/comments`, { content: newComment });
      setDisable(false);
      setNewComment('');
      refetch();
   }

   useEffect(() => {
      if (newComment) setDisable(false);
      else setDisable(true);
   }, [newComment]);

   return (
      <WatchComments>
         <WatchCommentsTitle>{countComments(data?.data)} Comments</WatchCommentsTitle>
         <WatchCommentsCards>
            <CommentBox
               name='Comment'
               disable={disable}
               handler={postComment}
               setter={setNewComment}
               user={user}
               value={newComment}
            />
            {data?.data?.map(one => (
               <CommentCard key={one?._id} data={one?.main} refetch={refetch} vId={vId} replyId={one?._id}>
                  {reverseData(one?.replies).map(two => (
                     <CommentCard reply key={two?._id} data={two} refetch={refetch} vId={vId} />
                  ))}
               </CommentCard>
            ))}
         </WatchCommentsCards>
      </WatchComments>
   );
}
