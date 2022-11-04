import Button from '@shared/button';
import Layout from '@layouts/layout';
import getTime from '@utilities/getTime';
import { Fragment, useState } from 'react';
import CommentBox from './partials/commentBox';
import useGetVideo from '@servers/useGetVideo';
import SuggestCard from './partials/suggestCard';
import CommentCard from './partials/commentCard';
import { useParams, useSearchParams } from 'react-router-dom';
import creator from '../../../assets/images/creator.png';
import { WatchPlayer, WatchRight, WatchRightCards, WatchRightTitle, WatchTexts, WatchTitle } from './watch.styled';
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
import useGetVideos from '@servers/useGetVideos';

export default function Watch() {
   const { vId: watchId } = useParams();
   const [descShow, setDescShow] = useState(false);

   const { data: videosData } = useGetVideos();
   const { data: videoData } = useGetVideo(watchId, { enabled: !!watchId });

   function renderDesc(text) {
      if (text?.length <= 270) return text;
      if (descShow) {
         return (
            <Fragment>
               {text}
               <span className='button' onClick={() => setDescShow(false)}>
                  See Less
               </span>
            </Fragment>
         );
      }
      return (
         <Fragment>
            {text?.slice(0, 270)}...
            <span className='button' onClick={() => setDescShow(true)}>
               See More
            </span>
         </Fragment>
      );
   }

   return (
      <Layout>
         <WatchContainer>
            <WatchLeft>
               <WatchPlayer>
                  <video
                     src={videoData?.video}
                     poster={videoData?.thumnail}
                     controls
                     style={{
                        height: '100%',
                        width: '100%',
                     }}
                  ></video>
               </WatchPlayer>
               <WatchTexts>
                  <WatchTitle>{videoData?.title}</WatchTitle>
                  <WatchInfos>
                     <WatchInfosLeft>
                        <WatchInfosLeftIcon>
                           <img src={creator} alt='user' />
                        </WatchInfosLeftIcon>
                        <WatchInfosLeftTexts>
                           <h3>
                              {videoData?.creator?.name} <span>@{videoData?.creator?.username}</span>
                           </h3>
                           <p>3.75M subscribers</p>
                        </WatchInfosLeftTexts>
                        <Button className='subscribe' name='Subscribe' loading={''} handler={() => {}} main round />
                        <Button className='alert' icon='bi:bell' loading={''} handler={() => {}} faded round />
                     </WatchInfosLeft>
                     <WatchInfosRight>
                        <WatchInfosLikes>
                           <Button
                              className='like'
                              name={videoData?.likes?.length}
                              icon='fluent:thumb-like-24-regular'
                              handler={() => {}}
                              faded
                              round
                           />
                           <span></span>
                           <Button
                              className='like'
                              name={videoData?.dislikes?.length}
                              icon='fluent:thumb-dislike-24-regular'
                              handler={() => {}}
                              faded
                              round
                           />
                        </WatchInfosLikes>
                        <Button name={`${videoData?.shares} Shares`} loading={''} handler={() => {}} faded round />
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
                     <span className='info'>
                        {videoData?.views} views &bull; {getTime(videoData?.createdAt)}
                     </span>
                     <span className='desc'>{renderDesc(videoData?.description)}</span>
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
                     {videosData?.data?.map(item => (
                        <SuggestCard key={item?._id} data={item} />
                     ))}
                  </WatchRightCards>
               </WatchRightTop>
               <WatchRightBottom>
                  <WatchRightTitle>Suggested Videos</WatchRightTitle>
                  <WatchRightCards>
                     {videosData?.data?.map(item => (
                        <SuggestCard key={item?._id} data={item} />
                     ))}
                  </WatchRightCards>
               </WatchRightBottom>
            </WatchRight>
         </WatchContainer>
      </Layout>
   );
}
