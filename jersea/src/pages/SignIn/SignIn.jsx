import React,{useState} from 'react'
import {LoginService} from '../../Services'
import './SignIn.css'
import '../css/main.css'
import {useAuth} from '../../hooks'
import { useNavigate } from "react-router-dom";

export const SignIn = () => {

    const navigate = useNavigate();
    const {auth,setAuth} = useAuth();
    const [signIn,setSignIn]=useState({
        email:'',
        password:''
    })


    const LoginHandler =async(e)=>{
        e.preventDefault();
        const token =  await LoginService(signIn.email,signIn.password)
        if(token){
            localStorage.setItem("token", token);
		    localStorage.setItem("isAuth", true);
            localStorage.setItem('userEmail',signIn.email);
            setAuth({...auth, token:token,isAuth:true});
            navigate("/")
        }
    }

    const GuestLogin =async(e)=>{
        e.preventDefault();
        const token =  await LoginService('murtaza@gmail.com','murtaza')
        if(token){
            localStorage.setItem("token", token);
		    localStorage.setItem("isAuth", true);
            setAuth({...auth, token:token,isAuth:true});
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
            <div className="sign-in-action">
                <div className="sign-in-rempass">
                    <input type="checkbox" id="remPass" name="Remember Password"/>
                    <label for="remPass"> Remember Me</label>
                </div>
                <a className="anchor-reset" href="#">Forgot you password?</a>
            </div>
            <button onClick={(e)=>LoginHandler(e)} className="sign-in-login sign-in-btn">Login</button>
            <button onClick={(e)=>GuestLogin(e)} className="sign-in-login sign-in-btn">Login with test credentials</button>
            <p onClick={()=>navigate('/sign-up')} className="sign-in-create sign-in-btn">Create Account</p>
        </form>
    </main>
  )
}

