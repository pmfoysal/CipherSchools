import { Icon } from '@iconify/react';
import { SearchboxButton, SearchboxContainer, SearchboxContent } from './searchbox.styled';

export default function Searchbox() {
   return (
      <SearchboxContainer>
         <SearchboxContent type='text' placeholder='Search anything...' />
         <SearchboxButton>
            <Icon icon='fluent:search-24-filled' />
         </SearchboxButton>
      </SearchboxContainer>
   );
}
