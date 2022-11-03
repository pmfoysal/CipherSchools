import Loader from '@shared/loader';
import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home, Signin, Signup, Watch } from '@pages';

export default function App() {
   return (
      <React.Fragment>
         <Suspense fallback={<Loader />}>
            <Routes>
               <Route path='/' element={<Home />} />
               <Route path='/signin' element={<Signin />} />
               <Route path='/signup' element={<Signup />} />
               <Route path='/watch' element={<Watch />} />
            </Routes>
         </Suspense>
      </React.Fragment>
   );
}
