import React, { createContext, useState } from 'react';
import axios from 'axios'

interface AppContextProps {
  isSignedIn: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => void;
}

export const AppContext = createContext<AppContextProps>({
  isSignedIn: false,
  signIn: async () => {},
  signOut: () => {}
});

export const AppProvider: React.FC = ({ children }) => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [token, setToken] = useState(null)
  const [user, setUser] = useState(null)

  const signIn = async (email='01833183625', password='Robi@11Dec') => {
    try {
      const res = await axios.post('https://shopoth-core.ddns.net/shop/api/v1/sign-in', { email, password })
      setToken(res.data.token)
      setUser(res.data.user)
      authApi(res.data.token)
    } catch (err) {
      console.error(err)
    }
  }
  const authApi = (token:string) => {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
    baseQuery: {
      baseUrl: 'https://shopoth-core.ddns.net/shop/api/'
    }

  }

  const signOut = () => {
    // make API call to sign out user
    setIsSignedIn(false);
  };

  return (
    <AppContext.Provider value={{ isSignedIn, signIn, signOut }}>
      {children}
    </AppContext.Provider>
  );
};
