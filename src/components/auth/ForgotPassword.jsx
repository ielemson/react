import React from 'react'
import {useForm} from "react-hook-form";
import toast, {Toaster} from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import {Header, Footer} from ".."
import api from "../../API"
const endpoint = "/reset-password"


const ForgotPassword = () => {

    const notify_error = (data) => toast.error(`${data}`);
    const notify_success = (data) => toast.success(`${data}`);
    const navigate = useNavigate();
    const {register, handleSubmit, formState: {
            errors
        }} = useForm();

    const onFormSubmit = (data) => {

        api.post(endpoint, data).then(response => {

            notify_success(response.data.message);
            setTimeout(() => {
                navigate('/');
            }, 3500);
           

        }).catch(error => {

            if (error.response.status === 400) {
                notify_error(error.response.data.message)
                // console.log(error.response.data.message)

            } else {

                error.response.data.errors.forEach(error => {
                    notify_error(error)
                });
            }
        });
    }
 
    return (
        <>
            <Header/>
            <div className="h-full mx-auto lg:w-6/12">
                <div className="m-auto py-12 px-6 sm:p-20 xl:w-10/12">
                    <h2 className="text-2xl text-gray-900 font-bold md:text-4xl text-center mt-32">Password Reset</h2>
                  
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
                            <button type='submit' className="w-full px-6 py-3 rounded-lg bg-sky-500 transition hover:bg-sky-600 focus:bg-sky-600 active:bg-sky-800">
                                <span className="font-semibold text-white text-lg">Request Reset</span>
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

export default ForgotPassword
