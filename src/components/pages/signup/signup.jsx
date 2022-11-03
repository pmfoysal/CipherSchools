import Logo from '@shared/logo';
import { useState } from 'react';
import Button from '@shared/button';
import Inputbox from '@shared/inputbox';
import { useNavigate } from 'react-router-dom';
import { SignupOptions, SignupRole } from './signup.styled';
import { SigninButtons, SigninContainer, SigninNote } from '../signin/signin.styled';
import { SigninContent, SigninDesc, SigninForm, SigninTitle } from '../signin/signin.styled';

export default function Signup() {
   const navigate = useNavigate();
   const [email, setEmail] = useState('');
   const [name, setName] = useState('');
   const [pass, setPass] = useState('');
   const [loading, setLoading] = useState(false);

   return (
      <SigninContainer>
         <SigninContent>
            <Logo />
            <SigninTitle>Create an Account!</SigninTitle>
            <SigninDesc>Provide your information to register</SigninDesc>
            <p className='sign-link'>
               Already have an account? <span onClick={() => navigate('/signin')}>Signin</span>
            </p>
            <SigninForm>
               <Inputbox type='text' label='Full Name' value={name} setter={setName} />
               <Inputbox type='email' label='Email Address' value={email} setter={setEmail} />
               <Inputbox type='password' label='Create Password' value={pass} setter={setPass} />
               <SignupRole>
                  <span>Select Role</span>
                  <SignupOptions>
                     <option value='creator'>Creator</option>
                     <option value='student'>Student</option>
                  </SignupOptions>
               </SignupRole>
            </SigninForm>
            <SigninButtons>
               <Button
                  main
                  name='Signup'
                  handler={() => {
                     setLoading(true);
                  }}
                  loading={loading}
               />
            </SigninButtons>
            <SigninNote>
               <strong>Note:</strong> By signing up, you'll agree our <span>Terms & Conditions</span>. Please read our{' '}
               <span>Privacy Policy</span> carefully.
            </SigninNote>
         </SigninContent>
      </SigninContainer>
   );
}
