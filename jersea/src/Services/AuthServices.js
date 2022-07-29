import axios from "axios";
import {toastHandler} from '../utils/utilFilterFunctions'

export const LoginService=async(email,password)=>{
    try {
        const response =await axios.post('/api/auth/login',
    {
        email, password
    })
    if(response.status===200||response.status===201){
        console.log(response.data)
        return response.data.encodedToken;
    }
    } catch (error) {
        console.log(error)
    }
    
}

export const SignUpService=async(firstName,lastName,email,password)=>{
    
        const response =await axios.post('/api/auth/signup',
        {
            firstName, lastName, email, password
        })
        if(response.status===201||response.status===200){
            return response.data.encodedToken;
        }
        
    
}

