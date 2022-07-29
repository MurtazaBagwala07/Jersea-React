import React,{useState} from 'react'
import {LoginService} from '../../Services'
import './SignIn.css'
import '../css/main.css'
import {useAuth} from '../../hooks'
import { useNavigate } from "react-router-dom";
import {toastHandler} from '../../utils/utilFilterFunctions'

export const SignIn = () => {

    const navigate = useNavigate();
    const {auth,setAuth} = useAuth();
    const [signIn,setSignIn]=useState({
        email:'',
        password:''
    })


    const LoginHandler =async(e)=>{
        e.preventDefault();

        if(signIn.email ==='' || signIn.password ===''){
            toastHandler('warn', 'Enter correct login details');
            return
        }

        const token =  await LoginService(signIn.email,signIn.password)
        if(token){
            localStorage.setItem("token", token);
		    localStorage.setItem("isAuth", true);
            localStorage.setItem('userEmail',signIn.email);
            setAuth({...auth, token:token,isAuth:true});
            toastHandler('success', 'Successfully logged in');
            navigate("/")
        }
    }

    const GuestLogin =async(e)=>{
        e.preventDefault();
        const token =  await LoginService('murtaza@gmail.com','murtaza')
        console.log(token);
        if(token){
            localStorage.setItem("token", token);
		    localStorage.setItem("isAuth", true);
            setAuth({...auth, token:token,isAuth:true});
            toastHandler('success', 'Successfully logged in');
            navigate("/")
        }
    }


  return (
    <main className="sign-in-page">
        <form className="sign-in-container">
            <h2 className="sign-in-title">Log In</h2>
            <div className="sign-in-email">
                <label for="email">Email Address</label>
                <input onChange={(e)=>setSignIn({...signIn,email:e.target.value})} type="email"/>
            </div>
            <div className="sign-in-password">
                <label for="password">Password</label>
                <input onChange={(e)=>setSignIn({...signIn,password:e.target.value})} type="password"/>
            </div>
            <button onClick={(e)=>LoginHandler(e)} className="sign-in-login sign-in-btn">Login</button>
            <button onClick={(e)=>GuestLogin(e)} className="sign-in-login sign-in-btn">Login with test credentials</button>
            <p onClick={()=>navigate('/sign-up')} className="sign-in-create sign-in-btn">Create Account</p>
        </form>
    </main>
  )
}

