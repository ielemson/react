import axios from 'axios';

const token = localStorage.getItem('token')

export default axios.create({
    baseURL: "https://api.topnotchengineering.com/api",
    headers: {
        'Accept':'application/json',
        'Content-Type':'application/json',
         Authorization: `Bearer ${token}`
    }
})
 