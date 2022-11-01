import Logo from './logo';
import { HeaderContainer, HeaderContent, HeaderLeft, HeaderMiddle, HeaderRight } from './header.styled';

export default function Header() {
   return (
      <HeaderContainer>
         <HeaderContent>
            <HeaderLeft>
               <Logo />
            </HeaderLeft>
            <HeaderMiddle></HeaderMiddle>
            <HeaderRight></HeaderRight>
         </HeaderContent>
      </HeaderContainer>
   );
}
