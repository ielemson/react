import React from "react";
import {useEffect} from "react";
import toast from 'react-hot-toast';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import api from "../API"
const endpoint = "/login"
const endpoint_logout = "/logout"


export const AuthContext = React.createContext();

const token = localStorage.getItem('token')
const url = "http://localhost:8000/api/user";
const config = {
    headers: {
        Authorization: `Bearer ${token}`
    }
};

 export const AuthContextProvider = ({children}) => {

  const notify_error = (data) => toast.error(`${data}`);
  const notify_success = (data) => toast.success(`${data}`);
  const [user, setUser] = React.useState('');
  const [isFalse, setisFalse] = React.useState(0);
  const navigate = useNavigate()

  
    const handleLogin = (data) => {

        api.post(endpoint, data).then(response => {
            setisFalse(1)
            localStorage.setItem('token', response.data.user.api_token)
            localStorage.setItem('isLoggedIn', true)
            getUser();
            notify_success(response.data.message)
     
            setTimeout(() => {
                // navigate('/dashboard',{replace:true})
                window.location.href="/dashboard"
            }, 300)

        }).catch(error => {

            if (error.response.status === 401) {
                notify_error(error.response.data.error)

            } else {

                error.response.data.errors.forEach(error => {
                    notify_error(error)
                });
            }

        });
    }

    const handleLogout = () => {

        api.post(endpoint_logout).then(() => {
            localStorage.clear();
            setUser('');
            setTimeout(() => {
                window.location.href="/login"
            }, 300)
           
        }).catch(error => {
            console.log(error.response);

        });
    }

    const getUser = () => {
        axios.get(url,config).then(res => {
            setUser(res.data)
        }).catch(err => console.log(err))
   }

   
    useEffect(() => {
    
    if(localStorage.getItem('isLoggedIn')){
        getUser()
    }
    }, [])

  

    return  <AuthContext.Provider value={{      
        user,
        isFalse,
        fetchUser:getUser,
        isLoggedIn:localStorage.getItem('isLoggedIn'),
        token:localStorage.getItem('token'),
        onLogin: handleLogin,
        logout:handleLogout}}>
            {children} 
        </AuthContext.Provider>
    
};

