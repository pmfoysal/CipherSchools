import Logo from '@shared/logo';
import api from '@middlewares/api';
import Button from '@shared/button';
import { toast } from 'react-toastify';
import Inputbox from '@shared/inputbox';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SignupOptions, SignupRole } from './signup.styled';
import { SigninButtons, SigninContainer, SigninNote } from '../signin/signin.styled';
import { SigninContent, SigninDesc, SigninForm, SigninTitle } from '../signin/signin.styled';

export default function Signup() {
   const navigate = useNavigate();
   const [email, setEmail] = useState('');
   const [name, setName] = useState('');
   const [pass, setPass] = useState('');
   const [role, setRole] = useState('creator');
   const [loading, setLoading] = useState(false);
   const [disable, setDisable] = useState(true);

   function roleHandler(e) {
      setRole(e.target.value);
   }

   async function submitHandler() {
      if (!email || !name || !pass) return;
      const payload = {
         name,
         email,
         password: pass,
         role,
      };
      try {
         setDisable(true);
         setLoading(true);
         await api.post('/auth/signup', payload);
         toast.success('Successfully registered the account!');
         setDisable(false);
         setLoading(false);
         navigate('/signin');
      } catch (res) {
         setDisable(false);
         setLoading(false);
         toast.error(res?.error || res?.message);
      }
   }

   useEffect(() => {
      if (!email || !name || !pass) setDisable(true);
      else setDisable(false);
   }, [email, name, pass]);

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
                  <SignupOptions onChange={roleHandler} value={role}>
                     <option value='creator'>Creator</option>
                     <option value='student'>Student</option>
                  </SignupOptions>
               </SignupRole>
            </SigninForm>
            <SigninButtons>
               <Button main name='Signup' handler={submitHandler} loading={loading} disable={disable} />
            </SigninButtons>
            <SigninNote>
               <strong>Note:</strong> By signing up, you'll agree our <span>Terms & Conditions</span>. Please read our{' '}
               <span>Privacy Policy</span> carefully.
            </SigninNote>
         </SigninContent>
      </SigninContainer>
   );
}
