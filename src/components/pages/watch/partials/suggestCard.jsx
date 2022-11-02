import { useNavigate } from 'react-router-dom';
import {
   SuggestCardAuthor,
   SuggestCardContainer,
   SuggestCardImage,
   SuggestCardInfo,
   SuggestCardTexts,
   SuggestCardTitle,
} from './suggestCard.styled';

export default function SuggestCard() {
   const navigate = useNavigate();

   return (
      <SuggestCardContainer onClick={() => {}}>
         <SuggestCardImage></SuggestCardImage>
         <SuggestCardTexts>
            <SuggestCardTitle>WWDC22: Day 2 Recap - Apple</SuggestCardTitle>
            <SuggestCardAuthor title='@foysal'>Foysal Ahmmed</SuggestCardAuthor>
            <SuggestCardInfo>24K views &bull; 2 minutes ago</SuggestCardInfo>
         </SuggestCardTexts>
      </SuggestCardContainer>
   );
}
