import Toaster from '@helpers/toaster';
import React, { Suspense } from 'react';
import { Home, Signin, Signup } from '@pages';
import { Route, Routes } from 'react-router-dom';

export default function App() {
   return (
      <React.Fragment>
         <Suspense fallback={<h1>Loading...</h1>}>
            <Routes>
               <Route path='/' element={<Home />} />
               <Route path='/signin' element={<Signin />} />
               <Route path='/signup' element={<Signup />} />
            </Routes>
         </Suspense>
         <Toaster />
      </React.Fragment>
   );
}
