import React, { useState, useEffect, useMemo } from "react";
import { ApolloProvider } from "@apollo/client";
import AuthNavigation from './routes/AuthNavigation'
import GuestNavigation from './routes/GuestNavigation'
import client from "./config/apollo";
import { getToken, decodeToken, removeToken } from "./utils/token";
import AuthContext from "./context/AuthContext";
import Home from "./pages/Home";
import './index.css'
import 'remixicon/fonts/remixicon.css'

// import { ToastContainer } from "react-toastify";


export default function App() {
  const [auth, setAuth] = useState(undefined)

  useEffect(() => {
    const token = getToken();
    if (!token) {
      setAuth(null);
    } else {
      setAuth(decodeToken(token));
    }
  }, []);

  const logout = () => {
    removeToken();
    setAuth(null);
  };

  const setUser = (user) => {
    setAuth(user);
  };

  const authData = useMemo(
    () => ({
      auth,
      logout,
      setUser,
    }),
    [auth]
  );

  if (auth === undefined) return null;

  return (
    <ApolloProvider client={client}>
      <AuthContext.Provider value={authData}>
        {/* {auth == null ?? <GuestNavigation/>} */}
        {/* {auth ?? <GuestNavigation/>} */}
        {<GuestNavigation/>}
        {/* <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        /> */}
      </AuthContext.Provider>
    </ApolloProvider>
  );
}