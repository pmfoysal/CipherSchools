import Logo from './logo';
import Searchbox from './searchbox';
import UserWindow from './userWindow';
import NoficationWindow from './noficationWindow';
import { HeaderContainer, HeaderContent, HeaderLeft, HeaderMiddle, HeaderRight } from './header.styled';

export default function Header() {
   return (
      <HeaderContainer>
         <HeaderContent>
            <HeaderLeft>
               <Logo />
            </HeaderLeft>
            <HeaderMiddle>
               <Searchbox />
            </HeaderMiddle>
            <HeaderRight>
               <NoficationWindow />
               <UserWindow />
            </HeaderRight>
         </HeaderContent>
      </HeaderContainer>
   );
}
