import React, { useState } from 'react'
import {useForm} from "react-hook-form";
import toast, { Toaster } from 'react-hot-toast';
// import axios from 'axios';
import {Header, Footer} from ".."
import api from "../../API"
const endpoint = "/create-user"
const notify_error = (data) => toast.error(`${data}`);
const notify_success = (data) => toast.success(`${data}`);

const Register = () => {
    const {register, handleSubmit, formState: {
            errors
        }} = useForm();

    const onFormSubmit = (data) => {

        api.post(endpoint,data).then(response => { // Do fancy stuff
            notify_success(response.data.success)
            // history.pushState('/login')
         setTimeout(() => {
               window.location.href="/login"
         }, 300);
        }).catch(error => {
            // console.log(error.response);
            // const {response} = error.response.data.errors
            error.response.data.errors.forEach(error => {
                notify_error(error)
            });
        });
    }

    return (
        <>
            <Header/>
            <div className="h-full mx-auto lg:w-6/12">
                <div className="m-auto py-12 px-6 sm:p-20 xl:w-10/12 ">
                    <h2 className="text-2xl text-gray-900 font-bold md:text-4xl text-center mt-32">Create Account</h2>
                        <div >

                        <form onSubmit={
                            handleSubmit(onFormSubmit)
                        }
                        className="space-y-8 py-6 ">
                        <div>
                            <input type="text" name='username' {...register('username', { required: "Username required" })} placeholder="Your Username" className="w-full py-3 px-6 ring-1 ring-gray-300 rounded-lg placeholder-gray-600 bg-transparent transition disabled:ring-gray-200 disabled:bg-gray-100 disabled:placeholder-gray-400 invalid:ring-red-400 focus:invalid:outline-none"/>
                            <span className='text-red-500'>
                                {
                                errors ?. username && errors.username.message
                            }</span>
                        </div>
                        <div>
                            <input type="text" name="fullname" {...register('fullname',{required:"Full name required"})} placeholder="Full Name" className="w-full py-3 px-6 ring-1 ring-gray-300 rounded-lg placeholder-gray-600 bg-transparent transition disabled:ring-gray-200 disabled:bg-gray-100 disabled:placeholder-gray-400 invalid:ring-red-400 focus:invalid:outline-none"/>
                            <span className='text-red-500'>
                                {
                                errors ?. fullname && errors.fullname.message
                            }</span>
                        </div>
                        <div>
                            <input type="email" name="email" {...register('email',{required:"Email required"})} placeholder="Your Email" className="w-full py-3 px-6 ring-1 ring-gray-300 rounded-lg placeholder-gray-600 bg-transparent transition disabled:ring-gray-200 disabled:bg-gray-100 disabled:placeholder-gray-400 invalid:ring-red-400 focus:invalid:outline-none"/>
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

                        <div>
                            <input type="password" name="password_confirmation" {...register('password_confirmation',{required:"Confirmation"})} placeholder="Confirm Your Password" className="w-full py-3 px-6 ring-1 ring-gray-300 rounded-lg placeholder-gray-600 bg-transparent transition disabled:ring-gray-200 disabled:bg-gray-100 disabled:placeholder-gray-400 invalid:ring-red-400 focus:invalid:outline-none"/>
                            <span className='text-red-500 text-left'>
                                {
                                errors ?. password_confirmation && errors.password_confirmation.message
                            }</span>
                        </div>

                        <div>
                            <button type='submit' className="w-full px-6 py-3 rounded-lg bg-sky-500 transition hover:bg-sky-600 focus:bg-sky-600 active:bg-sky-800">
                                <span className="font-semibold text-white text-lg">Create Account</span>
                            </button>
                        </div>
                    </form>

                        </div>
                  
                </div>
            </div>
            <Footer/>
            <Toaster 
             position="top-right"
             reverseOrder={false}
            />
        </>

    )
}

export default Register
