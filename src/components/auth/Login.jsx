import React from "react";
import {useForm} from "react-hook-form";
import { UserContextAPI } from '../../context/UserContext';
import {Toaster} from 'react-hot-toast';
import {Header, Footer} from ".."
import { Link } from 'react-router-dom';

const Login = () => {

    const useAuth = () => {
        return React.useContext(UserContextAPI);
      };
      const { onLogin,isLoggedIn } = useAuth();

    const {register, handleSubmit, formState: {
            errors
        }} = useForm();

    const onFormSubmit = (data) => {
        onLogin(data)
    }
 
    return (
        <>
            <Header/>
            <div className="h-full mx-auto lg:w-6/12">
                <div className="m-auto py-12 px-6 sm:p-20 xl:w-10/12">
                    <h2 className="text-2xl text-gray-900 font-bold md:text-4xl text-center mt-32">Account Login</h2>
                    <div className="mt-12 grid gap-6 sm:grid-cols-2">
                        <button className="h-12 px-6 border border-blue-100 rounded-lg bg-blue-50 hover:bg-blue-100 focus:bg-blue-100 active:bg-blue-200">
                            <div className="flex items-center space-x-4 justify-center">
                                <img src="https://tailus.io/sources/blocks/video/preview/images/google.svg" className="w-5" alt=""/>
                                <span className="block w-max font-medium tracking-wide text-sm text-blue-700">with  Google</span>
                            </div>
                        </button>
                        <button className="h-12 px-6 rounded-lg bg-gray-900 transition hover:bg-gray-800 active:bg-gray-600 focus:bg-gray-700">
                            <div className="flex space-x-4 items-center justify-center text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5" viewBox="0 0 16 16">
                                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                                </svg>
                                <span className="block w-max font-medium tracking-wide text-sm text-white">with Github</span>
                            </div>
                        </button>
                    </div>
                    <form onSubmit={
                            handleSubmit(onFormSubmit)
                        }
                        className="space-y-8 py-6">

                        <div>
                            <input type="email" name="email" {...register('email',{required:"Email requred"})} placeholder="Your Email" className="w-full py-3 px-6 ring-1 ring-gray-300 rounded-lg placeholder-gray-600 bg-transparent transition disabled:ring-gray-200 disabled:bg-gray-100 disabled:placeholder-gray-400 invalid:ring-red-400 focus:invalid:outline-none"/>
                            <span className='text-red-500'>
                                {
                                errors ?. email && errors.email.message
                            }</span>
                        </div>

                        <div>
                            <input type="password" name="password" {...register('password',{required:"Password required"})} placeholder="Your Password" className="w-full py-3 px-6 ring-1 ring-gray-300 rounded-lg placeholder-gray-600 bg-transparent transition disabled:ring-gray-200 disabled:bg-gray-100 disabled:placeholder-gray-400 invalid:ring-red-400 focus:invalid:outline-none"/>
                            <span className='text-red-500'>
                                {
                                errors ?. password && errors.password.message
                            }</span>
                        </div>
                        <Link to="/forgot-password">
                        <button type="reset" className="w-max">
                       <span className="text-sm tracking-wide text-sky-600">Forgot password ?</span>
                      </button>
                        </Link>
                        <div>
                            <button type='submit' className="w-full px-6 py-3 rounded-lg bg-sky-500 transition hover:bg-sky-600 focus:bg-sky-600 active:bg-sky-800">
                                <span className="font-semibold text-white text-lg">Login Account</span>
                            </button>
                        </div>
                    </form>

                </div>
            </div>
            <Footer/>
            <Toaster position="top-right"
                reverseOrder={false}/>
        </>

    )
}

export default Login
