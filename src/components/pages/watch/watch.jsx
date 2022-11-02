import Layout from '@layouts/layout';
import Button from '@shared/button';
import creator from '../../../assets/images/creator.png';
import { useSearchParams } from 'react-router-dom';
import {
   WatchComments,
   WatchCommentsCards,
   WatchCommentsTitle,
   WatchContainer,
   WatchDescs,
   WatchInfos,
   WatchInfosLeft,
   WatchInfosLeftIcon,
   WatchInfosLeftTexts,
   WatchInfosLikes,
   WatchInfosRight,
   WatchLeft,
   WatchRightBottom,
   WatchRightTop,
} from './watch.styled';
import { WatchPlayer, WatchRight, WatchRightCards, WatchRightTitle, WatchTexts, WatchTitle } from './watch.styled';
import SuggestCard from './partials/suggestCard';
import CommentCard from './partials/commentCard';
import CommentBox from './partials/commentBox';

export default function Watch() {
   const [params] = useSearchParams();
   const watchId = params.get('v');

   return (
      <Layout>
         <WatchContainer>
            <WatchLeft>
               <WatchPlayer>
                  <video
                     src='https://raw.githubusercontent.com/pmfoysal/data/main/vidplayer/videos/apple-day-2-recap.mp4'
                     poster='https://raw.githubusercontent.com/pmfoysal/data/main/vidplayer/images/day-2-recap-thumnail.jpg'
                     controls
                     style={{
                        height: '100%',
                        width: '100%',
                     }}
                  ></video>
               </WatchPlayer>
               <WatchTexts>
                  <WatchTitle>WWDC22: Day 2 Recap - Apple</WatchTitle>
                  <WatchInfos>
                     <WatchInfosLeft>
                        <WatchInfosLeftIcon>
                           <img src={creator} alt='user' />
                        </WatchInfosLeftIcon>
                        <WatchInfosLeftTexts>
                           <h3>
                              Foysal Ahmmed <span>@foysal</span>
                           </h3>
                           <p>1.75M subscribers</p>
                        </WatchInfosLeftTexts>
                        <Button className='subscribe' name='Subscribe' loading={''} handler={() => {}} main round />
                        <Button className='alert' icon='bi:bell' loading={''} handler={() => {}} faded round />
                     </WatchInfosLeft>
                     <WatchInfosRight>
                        <WatchInfosLikes>
                           <Button
                              className='like'
                              name='64K'
                              icon='fluent:thumb-like-24-regular'
                              handler={() => {}}
                              faded
                              round
                           />
                           <span></span>
                           <Button
                              className='like'
                              name='14K'
                              icon='fluent:thumb-dislike-24-regular'
                              handler={() => {}}
                              faded
                              round
                           />
                        </WatchInfosLikes>
                        <Button name='Share' icon='cil:share-all' loading={''} handler={() => {}} faded round />
                        <Button
                           name='Download'
                           icon='fluent:arrow-download-24-filled'
                           loading={''}
                           handler={() => {}}
                           faded
                           round
                        />
                     </WatchInfosRight>
                  </WatchInfos>
                  <WatchDescs>
                     <span>16K views &bull; 2 minutes ago</span>
                     Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente reprehenderit dolores asperiores nesciunt
                     non in libero veritatis praesentium nulla explicabo qui, impedit veniam nisi enim? Nostrum ipsam odio, quas
                     voluptatem vitae accusamus nihil saepe doloribus velit tempore doloremque atque ducimus amet, optio eum,
                     debitis assumenda porro! Quos modi deleniti esse voluptas asperiores. Quas, iste impedit? Optio ut soluta
                     quisquam ea quod, iure hic recusandae quos cumque sint repellat modi dolore vel obcaecati rem a corporis
                     labore! Magni voluptates illum, quaerat cum dignissimos impedit qui repellendus! Autem pariatur sunt ratione
                     nostrum, laborum voluptas et, quis, tenetur officia dolores labore iusto ex.
                  </WatchDescs>
                  <WatchComments>
                     <WatchCommentsTitle>32 Comments</WatchCommentsTitle>
                     <WatchCommentsCards>
                        <CommentBox name='Comment' />
                        <CommentCard>
                           <CommentCard reply />
                           <CommentCard reply />
                        </CommentCard>
                        <CommentCard />
                        <CommentCard />
                     </WatchCommentsCards>
                  </WatchComments>
               </WatchTexts>
            </WatchLeft>
            <WatchRight>
               <WatchRightTop>
                  <WatchRightTitle>Related Videos</WatchRightTitle>
                  <WatchRightCards>
                     <SuggestCard />
                     <SuggestCard />
                     <SuggestCard />
                     <SuggestCard />
                  </WatchRightCards>
               </WatchRightTop>
               <WatchRightBottom>
                  <WatchRightTitle>Suggested Videos</WatchRightTitle>
                  <WatchRightCards>
                     <SuggestCard />
                     <SuggestCard />
                     <SuggestCard />
                     <SuggestCard />
                  </WatchRightCards>
               </WatchRightBottom>
            </WatchRight>
         </WatchContainer>
      </Layout>
   );
}
