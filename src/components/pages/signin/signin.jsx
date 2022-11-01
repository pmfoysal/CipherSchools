import Logo from '@shared/logo';
import { useState } from 'react';
import Button from '@shared/button';
import Inputbox from '@shared/inputbox';
import { SigninContent, SigninDesc, SigninForm, SigninTitle } from './signin.styled';
import { SigninButtons, SigninCheck, SigninContainer, SigninNote } from './signin.styled';

export default function Signin() {
   const [email, setEmail] = useState('');
   const [pass, setPass] = useState('');
   const [loading, setLoading] = useState(false);

   return (
      <SigninContainer>
         <SigninContent>
            <Logo />
            <SigninTitle>Welcome Back!</SigninTitle>
            <SigninDesc>Provide your email ID and password to continue</SigninDesc>
            <SigninForm>
               <Inputbox type='email' label='Email ID' value={email} setter={setEmail} />
               <Inputbox type='password' label='Password' value={pass} setter={setPass} />
               <SigninCheck>
                  <input type='checkbox' />
                  Remember me!
               </SigninCheck>
            </SigninForm>
            <SigninButtons>
               <Button
                  main
                  name='Signin'
                  handler={() => {
                     setLoading(true);
                  }}
                  loading={loading}
               />
            </SigninButtons>
            <SigninNote>
               <strong>Note:</strong> By signing in, you'll agree our <span>Terms & Conditions</span>. Please read our{' '}
               <span>Privacy Policy</span> carefully.
            </SigninNote>
         </SigninContent>
      </SigninContainer>
   );
}
