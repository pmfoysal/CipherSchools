import { Fragment } from 'react';
import { Icon } from '@iconify/react';
import { ButtonContainer } from './button.styled';

export default function Button({ name, handler, icon, main, round, loading, disable, faded, ...rest }) {
   return (
      <ButtonContainer onClick={handler} main={main} round={round} disabled={loading || disable} faded={faded} {...rest}>
         {loading ? (
            <Fragment>
               <Icon icon='eos-icons:loading' />
               Loading...
            </Fragment>
         ) : (
            <Fragment>
               {icon ? <Icon icon={icon} /> : null}
               {name}
            </Fragment>
         )}
      </ButtonContainer>
   );
}
