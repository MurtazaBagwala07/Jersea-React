import React, { useState } from 'react'
import './SignUp.css'
import '../css/main.css'
import {SignUpService} from '../../Services'
import { useNavigate } from "react-router-dom";



export const SignUp = () => {
    const navigate = useNavigate();
    const [signUp,setSignUp] =useState({
        firstName:'',
        lastName:'',
        email: '',
        password: '',
    })

    const inputChangeHandler=(e)=>{
        setSignUp({...signUp,[e.target.name]:e.target.value})
    }   

    const signUpHandler =async(e)=>{
        e.preventDefault();
        const {firstName,lastName,email,password}= signUp;
        console.log(firstName,lastName,email,password)
        const token = await SignUpService(firstName,lastName,email,password)
        if(token){
            navigate('/sign-in')
        }
    }

  return (
    <form className="sign-up-page">
        <div className="sign-in-container">
            <h2 className="sign-in-title">Sign up</h2>
            <div className="sign-in-email">
                <label for="email">First Name</label>
                <input name='firstName' onChange={(e)=>inputChangeHandler(e)} type="text"/>
            </div>
            <div className="sign-in-email">
                <label for="email">Last Name</label>
                <input name='lastName' onChange={(e)=>inputChangeHandler(e)} type="text"/>
            </div>
            <div className="sign-in-email">
                <label for="email">Email Address</label>
                <input name='email' onChange={(e)=>inputChangeHandler(e)} type="email"/>
            </div>
            <div className="sign-in-password">
                <label for="password">Password</label>
                <input name='password' onChange={(e)=>inputChangeHandler(e)} type="password"/>
            </div>
            <div className="sign-in-action">
                <div class="sign-in-rempass">
                    <input type="checkbox" id="remPass" name="Remember Password"/>
                    <label for="remPass"> I accept all the terms and conditions</label>
                </div>
            </div>
            <button onClick={(e)=>signUpHandler(e)} className="sign-in-login sign-in-btn">Sign Up</button>
            <p onClick={()=>navigate('/sign-in')} className="sign-in-create sign-in-btn">Already have a account</p>
        </div>
    </form>
  )
}

