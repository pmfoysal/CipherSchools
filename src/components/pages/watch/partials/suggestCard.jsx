import getTime from '@utilities/getTime';
import { useNavigate } from 'react-router-dom';
import { SuggestCardInfo, SuggestCardTexts, SuggestCardTitle } from './suggestCard.styled';
import { SuggestCardAuthor, SuggestCardContainer, SuggestCardImage } from './suggestCard.styled';

export default function SuggestCard({ data = {} }) {
   const navigate = useNavigate();

   return (
      <SuggestCardContainer onClick={() => navigate(`/watch/${data?._id}`)}>
         <SuggestCardImage>
            <img src={data?.thumbnail} alt='thumbnail' />
         </SuggestCardImage>
         <SuggestCardTexts>
            <SuggestCardTitle>{data?.title}</SuggestCardTitle>
            <SuggestCardAuthor title={`@${data?.creator?.username}`}>{data?.creator?.name}</SuggestCardAuthor>
            <SuggestCardInfo>
               {data?.views} views &bull; {getTime(data?.createdAt)}
            </SuggestCardInfo>
         </SuggestCardTexts>
      </SuggestCardContainer>
   );
}
