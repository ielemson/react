import React, { useState } from 'react'
import {useForm} from "react-hook-form";
import toast, {Toaster} from 'react-hot-toast';
import {useNavigate, useParams,Link} from 'react-router-dom';
import {AiOutlineWarning} from "react-icons/ai"
import {Header, Footer} from ".."
import api from "../../API"
const endpoint = "/confirm-reset-token"
const update_endpoint = "/update-password"


const ResetPassword = () => {

    const notify_error = (data) => toast.error(`${data}`);
    const notify_success = (data) => toast.success(`${data}`);
    const [tokenStatus, setTokenStatus] = React.useState(null)
    const [email,setEmail] = useState(null);
    let {token} = useParams();
    const navigate = useNavigate();

    const {register, handleSubmit, formState: {
            errors
        }} = useForm();

    const apiCall = ()=>{
        api.get(`${endpoint}/${token}`).then(response => {
            setTokenStatus(response.data.token_status)
            setEmail(response.data.useremail)
            console.log(response)
        }).catch(error => {

            if (error.response.status === 404) {
                notify_error(error.response.data.message)
                // console.log(error.response.data.message)

            } else {

                error.response.data.errors.forEach(error => {
                    notify_error(error)
                });
            }

            // console.log(error.response)
        });
    }

    React.useEffect(() => {
       if(token && token !== "") apiCall()
    }, [])

    const onFormSubmit = (data) => {
        const {password,password_confirmation} = data

        const userData = {
            password,
            password_confirmation,
            email
        }


        api.post(update_endpoint, userData).then(response => {

            notify_success(response.data.status);
            setTimeout(() => {
                navigate('/login');
            }, 3500);

            // console.log(response)


        }).catch(error => {

            if (error.response.status === 422) {
                
                error.response.data.errors.forEach(error => {
                    notify_error(error)
                });

            } else {
                notify_error(error.response.data.message)
               
            }
        });
    }

    return (
        <>
            <Header/> {
            tokenStatus === true ? (
                <div className="h-full mx-auto lg:w-6/12">
                    <div className="m-auto py-12 px-6 sm:p-20 xl:w-10/12">
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl text-center mt-32">Reset Your Password</h2>

                        <form onSubmit={
                                handleSubmit(onFormSubmit)
                            }
                            className="space-y-8 py-6">
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
                                    <span className="font-semibold text-white text-lg">Reset Password</span>
                                </button>
                            </div>
                        </form>

                    </div>
                </div>
            ) : tokenStatus === false ? (

                <div className="m-auto py-12 px-6 sm:p-20 xl:w-10/12">

                    <h2 className="text-2xl mb-5 text-gray-900 font-bold md:text-4xl text-center mt-32">Reset Your Password</h2>

                    <div id="alert-additional-content-4" className="p-4 mb-4 bg-yellow-100 rounded-lg dark:bg-yellow-200" role="alert">
                        <div className="flex items-center">
                            {/* <svg className="mr-2 w-5 h-5 text-yellow-700 dark:text-yellow-800" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path>
                            </svg> */}
                            <AiOutlineWarning/>
                            <h3 className="text-lg font-medium text-yellow-700 dark:text-yellow-800">This is a warning alert</h3>
                        </div>
                        <div className="mt-2 mb-4 text-sm text-yellow-700 dark:text-yellow-800">
                           The token provided is not valid. Please use the forgot password link below to request a new password reset. 
                        </div>
                        <div className="flex">
                            <Link to="/forgot-password"  className="text-white bg-yellow-700 hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-xs px-3 py-1.5 mr-2 text-center inline-flex items-center dark:bg-yellow-800 dark:hover:bg-yellow-900">
                                
                                Reset Password
                            </Link>
                            <Link to="/"  className="text-yellow-700 bg-transparent border border-yellow-700 hover:bg-yellow-800 hover:text-white focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-xs px-3 py-1.5 text-center dark:border-yellow-800 dark:text-yellow-800 dark:hover:text-white" data-dismiss-target="#alert-additional-content-4" aria-label="Close">
                                Home
                            </Link>
                        </div>
                    </div>

                </div>
            ):( 
                <div className="m-auto py-12 px-6 sm:p-20 xl:w-10/12">

                <h2 className="text-2xl mb-5 text-gray-900 font-bold md:text-4xl text-center mt-32">Reset Your Password</h2>

                <div id="alert-additional-content-4" className="p-4 mb-4 bg-yellow-100 rounded-lg dark:bg-yellow-200" role="alert">
                    <div className="flex items-center">
                        {/* <svg className="mr-2 w-5 h-5 text-yellow-700 dark:text-yellow-800" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path>
                        </svg> */}
                        <AiOutlineWarning/>
                        <h3 className="text-lg font-medium text-yellow-700 dark:text-yellow-800">This is a warning alert</h3>
                    </div>
                    <div className="mt-2 mb-4 text-sm text-yellow-700 dark:text-yellow-800">
                       The token provided is not valid. Please use the forgot password link below to request a new password reset. 
                    </div>
                    <div className="flex">
                        <Link to="/forgot-password"  className="text-white bg-yellow-700 hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-xs px-3 py-1.5 mr-2 text-center inline-flex items-center dark:bg-yellow-800 dark:hover:bg-yellow-900">
                            
                            Reset Password
                        </Link>
                        <Link to="/"  className="text-yellow-700 bg-transparent border border-yellow-700 hover:bg-yellow-800 hover:text-white focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-xs px-3 py-1.5 text-center dark:border-yellow-800 dark:text-yellow-800 dark:hover:text-white" data-dismiss-target="#alert-additional-content-4" aria-label="Close">
                            Home
                        </Link>
                    </div>
                </div>

            </div>
            )
        }
            <Footer/>
            <Toaster position="top-right"
                reverseOrder={false}/>
        </>
    )
}

export default ResetPassword
