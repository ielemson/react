import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import {Login,Register,Home,ForgotPassword,ResetPassword,NotFound} from "./components";
import UserContextProvider from './context/UserContext';

const App = ()=>{

  return (

    <UserContextProvider>
   <BrowserRouter>
    <Routes>
      <Route index  element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/reset-password/:token" element={<ResetPassword />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
  </UserContextProvider>
  )
}
export default App;