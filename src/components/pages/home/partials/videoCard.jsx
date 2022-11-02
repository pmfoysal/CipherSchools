import { useNavigate } from 'react-router-dom';
import user from '../../../../assets/images/user.png';
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

export default function VideoCard() {
   const navigate = useNavigate();

   return (
      <VideoCardContainer onClick={() => navigate(`/watch?v=${1}`)}>
         <VideoCardImage>
            <img
               src='https://raw.githubusercontent.com/pmfoysal/data/main/vidplayer/images/day-2-recap-thumnail.jpg'
               alt='thumbnail'
            />
         </VideoCardImage>
         <VideoCardDetails>
            <VideoCardIcon>
               <img src={user} alt='user' />
            </VideoCardIcon>
            <VideoCardTexts>
               <VideoCardTitle>WWDC22: Day 2 Recap - Apple</VideoCardTitle>
               <VideoCardAuthor>
                  Foysal Ahmmed <span>@foysal</span>
               </VideoCardAuthor>
               <VideoCardInfo>2 minutes ago &bull; 30K views</VideoCardInfo>
            </VideoCardTexts>
         </VideoCardDetails>
      </VideoCardContainer>
   );
}
