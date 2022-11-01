import Logo from './logo';
import Searchbox from './searchbox';
import { HeaderContainer, HeaderContent, HeaderLeft, HeaderMiddle, HeaderRight } from './header.styled';
import UserWindow from './userWindow';

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
               <UserWindow />
            </HeaderRight>
         </HeaderContent>
      </HeaderContainer>
   );
}
