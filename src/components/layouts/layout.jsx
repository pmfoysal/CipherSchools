import Header from '@shared/header';
import { LayoutContainer, LayoutContent } from './layout.styled';

export default function Layout({ children }) {
   return (
      <LayoutContainer>
         <Header />
         <LayoutContent>{children}</LayoutContent>
      </LayoutContainer>
   );
}
