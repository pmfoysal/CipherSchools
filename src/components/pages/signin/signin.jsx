import Logo from '@shared/logo';
import api from '@middlewares/api';
import Button from '@shared/button';
import { toast } from 'react-toastify';
import Inputbox from '@shared/inputbox';
import { useNavigate } from 'react-router-dom';
import { StoreContext } from '@contexts/storeProvider';
import { useContext, useEffect, useState } from 'react';
import { SigninContent, SigninDesc, SigninForm, SigninTitle } from './signin.styled';
import { SigninButtons, SigninCheck, SigninContainer, SigninNote } from './signin.styled';

export default function Signin() {
   const navigate = useNavigate();
   const [email, setEmail] = useState('');
   const { user, setUser } = useContext(StoreContext);
   const [password, setPassword] = useState('');
   const [disable, setDisable] = useState(true);
   const [loading, setLoading] = useState(false);

   async function submitHandler() {
      try {
         setLoading(true);
         const { data } = await api.post('/auth/signin', { email, password });
         if (data?.data?.token) {
            toast.success('Successfully signed in');
            window.localStorage.setItem('userToken', data.token);
            setUser(data?.data?.user);
            navigate('/', { replace: true });
         }
      } catch (res) {
         setLoading(false);
         setUser({});
         window.localStorage.removeItem('userToken');
         console.log('Failed to POST /auth/signin');
         console.log(res.error || res.message);
         toast.error(res.error || res.message);
      }
   }

   useEffect(() => {
      if (!email || !password) setDisable(true);
      else setDisable(false);
   }, [email, password]);

   return (
      <SigninContainer>
         <SigninContent>
            <Logo />
            <SigninTitle>Welcome Back!</SigninTitle>
            <SigninDesc>Provide your email ID and password to continue</SigninDesc>
            <SigninForm>
               <Inputbox type='email' label='Email ID' value={email} setter={setEmail} />
               <Inputbox type='password' label='Password' value={password} setter={setPassword} />
               <SigninCheck>
                  <input type='checkbox' />
                  Remember me!
               </SigninCheck>
            </SigninForm>
            <SigninButtons>
               <Button main name='Signin' handler={submitHandler} loading={loading} disable={disable} />
            </SigninButtons>
            <SigninNote>
               <strong>Note:</strong> By signing in, you'll agree our <span>Terms & Conditions</span>. Please read our{' '}
               <span>Privacy Policy</span> carefully.
            </SigninNote>
         </SigninContent>
      </SigninContainer>
   );
}
