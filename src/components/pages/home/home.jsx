import Layout from '@layouts/layout';
import VideoCard from './partials/videoCard';
import useGetVideos from '@servers/useGetVideos';
import { HomeCards, HomeContainer, HomeTitle } from './home.styled';

export default function Home() {
   const { data } = useGetVideos();

   return (
      <Layout>
         <HomeContainer>
            <HomeTitle>Trending videos</HomeTitle>
            <HomeCards>
               {data?.data?.map(item => (
                  <VideoCard key={item?._id} data={item} />
               ))}
            </HomeCards>
         </HomeContainer>
      </Layout>
   );
}
