import CommentBox from './commentBox';
import CommentCard from './commentCard';
import useGetComments from '@servers/useGetComments';
import { WatchComments, WatchCommentsCards, WatchCommentsTitle } from '../watch.styled';

export default function WatchCommentsComp({ vId }) {
   const { data, refetch } = useGetComments(vId, { enabled: !!vId });

   function countComments(comments = []) {
      let count = comments?.length;
      comments?.forEach(item => {
         if (item?.replies?.length) {
            count += item?.replies?.length;
         }
      });
      return count;
   }

   return (
      <WatchComments>
         <WatchCommentsTitle>{countComments(data?.data)} Comments</WatchCommentsTitle>
         <WatchCommentsCards>
            <CommentBox name='Comment' />
            {data?.data?.map(one => (
               <CommentCard key={one?._id} data={one?.main} refetch={refetch} vId={vId}>
                  {one?.replies?.map(two => (
                     <CommentCard reply key={two?._id} data={two} refetch={refetch} vId={vId} />
                  ))}
               </CommentCard>
            ))}
         </WatchCommentsCards>
      </WatchComments>
   );
}
