import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {
    Login,
    Register,
    Home,
    ForgotPassword,
    ResetPassword,
    NotFound,
    Dashboard,
    Blog
} from "./components";
import {AuthContextProvider} from './context/auth';
import AuthCheck from './utils/AuthCheck';

const App = () => {

    return (

        
            <BrowserRouter>
            <AuthContextProvider>
                <Routes>
                    <Route index
                        element={<Home/>}/>
                    <Route path="/login"
                        element={<Login/>}/>
                    <Route path="/register"
                        element={<Register/>}/>
                    <Route path="/forgot-password"
                        element={<ForgotPassword/>}/>
                    <Route path="/reset-password/:token"
                        element={<ResetPassword/>}/>
                   <Route path='blog' element={<Blog/>}/>
                   {/* Restricte Route */}
                    <Route path="/dashboard"
                        element={

                        <AuthCheck>
                            <Dashboard/>
                        </AuthCheck>
                              }/>
                 {/* Restricte Route */}

                    <Route path="*"
                        element={<NotFound/>}/>
                </Routes>
                </AuthContextProvider>
            </BrowserRouter>
        
    )
}
export default App;
