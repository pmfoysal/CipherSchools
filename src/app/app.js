import Loader from '@shared/loader';
import React, { Suspense } from 'react';
import RequireAuth from '@helpers/requireAuth';
import { Route, Routes } from 'react-router-dom';
import { Home, Signin, Signup, Watch } from '@pages';

export default function App() {
   return (
      <React.Fragment>
         <Suspense fallback={<Loader />}>
            <Routes>
               <Route path='/' element={<RequireAuth then={<Home />} />} />
               <Route path='/signin' element={<Signin />} />
               <Route path='/signup' element={<Signup />} />
               <Route path='/watch' element={<RequireAuth then={<Watch />} />} />
               <Route path='*' element={<h1>Page Not Found!</h1>} />
            </Routes>
         </Suspense>
      </React.Fragment>
   );
}
