import React, { useContext } from 'react';
import { StoreContext } from '@contexts/storeProvider';
import { Navigate, useLocation } from 'react-router-dom';

export default function RequireAuth({ then }) {
   const location = useLocation();
   const { user } = useContext(StoreContext);

   if (!user?._id) {
      return <Navigate to='/signin' state={{ from: location }} />;
   }
   return then;
}
