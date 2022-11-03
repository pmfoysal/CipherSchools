import Logo from '@shared/logo';
import api from '@middlewares/api';
import Button from '@shared/button';
import { toast } from 'react-toastify';
import Inputbox from '@shared/inputbox';
import { StoreContext } from '@contexts/storeProvider';
import { useContext, useEffect, useState } from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { SigninContent, SigninDesc, SigninForm, SigninTitle } from './signin.styled';
import { SigninButtons, SigninCheck, SigninContainer, SigninNote } from './signin.styled';

export default function Signin() {
   const location = useLocation();
   const navigate = useNavigate();
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [disable, setDisable] = useState(true);
   const [loading, setLoading] = useState(false);
   const { user, setUser } = useContext(StoreContext);

   async function submitHandler() {
      try {
         setLoading(true);
         const { data } = await api.post('/auth/signin', { email, password });
         if (data?.data?.token) {
            toast.success('Successfully signed in');
            window.localStorage.setItem('userToken', data?.data?.token);
            setUser(data?.data?.user);
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

   if (user?._id) {
      const from = location?.state?.from?.pathname || '/';
      return <Navigate to={from} replace />;
   }

   return (
      <SigninContainer>
         <SigninContent>
            <Logo />
            <SigninTitle>Welcome Back!</SigninTitle>
            <SigninDesc>Provide your email ID and password to continue</SigninDesc>
            <p className='sign-link'>
               Don't have an account? <span onClick={() => navigate('/signup')}>Signup</span>
            </p>
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
