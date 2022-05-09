import React from "react";
import {useEffect} from "react";
import toast from 'react-hot-toast';
import axios from "axios";
import api from "../API"
const endpoint = "/login"


export const UserContextAPI = React.createContext();

const token = localStorage.getItem('token')
const url = "http://localhost:8000/api/user";
const config = {
    headers: {
        Authorization: `Bearer ${token}`
    }
};

 const UserContextProvider = ({children}) => {


  const notify_error = (data) => toast.error(`${data}`);
  const notify_success = (data) => toast.success(`${data}`);
    const [user, setUser] = React.useState('');

    const getUser = () => {
        axios.get(url, config).then(res => setUser(res.data)).catch(err => console.log(err))
    }

    const handleLogin = (data) => {

        api.post(endpoint, data).then(response => {

            localStorage.setItem('token', response.data.user.api_token)
            localStorage.setItem('isLoggedIn', true)

            notify_success(response.data.status)
            // navigate("/");
          window.location.href="/"

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

    useEffect(() => {
        return() => {
            getUser()
        };
    }, [])

    const value = {
        user,
        isLoggedIn:localStorage.getItem('isLoggedIn', true),
        token:localStorage.getItem('token'),
        onLogin: handleLogin
    }
    return (
        <UserContextAPI.Provider value={value}>
            {children} </UserContextAPI.Provider>
    );
};

export default UserContextProvider;