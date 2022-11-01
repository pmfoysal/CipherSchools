import Layout from '@layouts/layout';
import VideoCard from './partials/videoCard';
import { HomeCards, HomeContainer, HomeTitle } from './home.styled';

export default function Home() {
   return (
      <Layout>
         <HomeContainer>
            <HomeTitle>Trending videos</HomeTitle>
            <HomeCards>
               <VideoCard />
               <VideoCard />
               <VideoCard />
               <VideoCard />
            </HomeCards>
         </HomeContainer>
      </Layout>
   );
}
