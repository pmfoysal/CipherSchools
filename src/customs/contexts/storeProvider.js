import React, { createContext, useEffect, useState } from 'react';

export const StoreContext = createContext();

export default function StoreProvider({ children }) {
   const [user, setUser] = useState({});

   useEffect(() => {
      const prevUser = window.localStorage.getItem('user');
      if (prevUser?.length > 10) setUser(JSON.parse(prevUser));
   }, []);

   useEffect(() => {
      window.localStorage.setItem('user', JSON.stringify(user));
   }, [user]);

   return <StoreContext.Provider value={{ user, setUser }}>{children}</StoreContext.Provider>;
}
