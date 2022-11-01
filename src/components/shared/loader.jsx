import React from 'react';
import Logo from './logo';
import { BarLoader } from 'react-spinners';
import { LoaderContainer } from './loader.styled';

export default function Loader() {
   return (
      <LoaderContainer>
         <Logo />
         <BarLoader speedMultiplier='2' color='#f08080' height='0.5rem' width='12rem' css={{ borderRadius: '50rem' }} />
      </LoaderContainer>
   );
}
