import React from 'react';
import { ToastContainer } from 'react-toastify';

export default function Toaster() {
   return (
      <ToastContainer
         position='bottom-right'
         autoClose={2500}
         hideProgressBar
         newestOnTop={false}
         closeOnClick
         rtl={false}
         pauseOnFocusLoss={false}
         draggable
         pauseOnHover={false}
         theme='light'
      />
   );
}
