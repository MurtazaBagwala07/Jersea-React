import axios from "axios";

export const LoginService=async(email,password)=>{
    try {
        const response =await axios.post('/api/auth/login',
    {
        email, password
    })
    
    if(response.status===200||response.status===201){
        return response.data;
    }
    } catch (error) {
        console.log(error)
    }
    
}

export const SignUpService=async(firstName,lastName,email,password)=>{
    
        console.log('entered function')
        const response =await axios.post('/api/auth/signup',
        {
            firstName, lastName, email, password
        })
        if(response.status===201||response.status===200){
            return response.data.encodedToken;
        }
        
    
}

