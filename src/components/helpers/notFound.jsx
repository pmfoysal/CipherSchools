import Layout from '@layouts/layout';
import { NotFoundContainer } from './notFound.styled';

export default function NotFound() {
   return (
      <Layout>
         <NotFoundContainer>
            <h1>404</h1>
            <h3>— Page Not Found —</h3>
         </NotFoundContainer>
      </Layout>
   );
}
