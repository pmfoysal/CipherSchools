import { Fragment } from 'react';
import { Icon } from '@iconify/react';
import { ButtonContainer } from './button.styled';

export default function Button({ name, handler, main, round, loading, disable }) {
   return (
      <ButtonContainer onClick={handler} main={main} round={round} disabled={loading || disable}>
         {loading ? (
            <Fragment>
               <Icon icon='eos-icons:loading' />
               Loading...
            </Fragment>
         ) : (
            <Fragment>{name}</Fragment>
         )}
      </ButtonContainer>
   );
}
