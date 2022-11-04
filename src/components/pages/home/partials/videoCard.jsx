import getTime from '@utilities/getTime';
import { useNavigate } from 'react-router-dom';
import creator from '../../../../assets/images/creator.png';
import {
   VideoCardAuthor,
   VideoCardContainer,
   VideoCardDetails,
   VideoCardIcon,
   VideoCardImage,
   VideoCardInfo,
   VideoCardTexts,
   VideoCardTitle,
} from './videoCard.styled';

export default function VideoCard({ data = {} }) {
   const navigate = useNavigate();

   return (
      <VideoCardContainer onClick={() => navigate(`/watch?v=${data._id}`)}>
         <VideoCardImage>
            <img src={data.thumbnail} alt='thumbnail' />
         </VideoCardImage>
         <VideoCardDetails>
            <VideoCardIcon>
               <img src={creator} alt='creator' />
            </VideoCardIcon>
            <VideoCardTexts>
               <VideoCardTitle>{data.title}</VideoCardTitle>
               <VideoCardAuthor>
                  {data.creator.name} <span>@{data.creator.username}</span>
               </VideoCardAuthor>
               <VideoCardInfo>
                  {getTime(data.createdAt)} &bull; {data.views} views
               </VideoCardInfo>
            </VideoCardTexts>
         </VideoCardDetails>
      </VideoCardContainer>
   );
}
