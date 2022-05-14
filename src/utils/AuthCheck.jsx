import React from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/auth';

const AuthCheck = ({children}) => {
  const {isLoggedIn} =  React.useContext(AuthContext)

  if(!localStorage.getItem('isLoggedIn')){

    return <Navigate to="/login"/>
  }
    return (
        <>
        {children}
        </>
    );
};

export default AuthCheck;