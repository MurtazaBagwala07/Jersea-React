import React from 'react';
import '../../pages/css/main.css'
import { useAuth } from '../../hooks';
import { useNavigate } from "react-router-dom";


export const Header=()=>{
    const {auth,setAuth,initialAuth} =useAuth();
    const navigate = useNavigate();

    const LogOutHandler=()=>{
        localStorage.removeItem('token')
        localStorage.removeItem('isAuth')
        setAuth(initialAuth);
        navigate('/sign-in')
        
    }
    return(
        <nav className="ecom-nav-container">
            <p className="ecom-nav-title">Jersea Store</p>
            <div className="ecom-nav-searchbar">
                <input className="ecom-nav-searchbar-input" type="text" placeholder="Search"/>
                <button className="search-btn"><i class="fa fa-search"></i></button>
            </div>
        
            <div className="ecom-nav-action-btns">
                {!auth.isAuth && <button className="ecom-nav-action-btn nav-btn-login">Login</button>}
                {auth.isAuth && <button onClick={LogOutHandler} className="ecom-nav-action-btn nav-btn-login">Log Out</button>}
                <div className="ecom-nav-action-btn badge">
                    <i class="fas fa-shopping-cart ecom-nav-icon"></i>
                    <span className="badge-number">6</span>
                </div>
            
                <div className="ecom-nav-action-btn badge">
                    <i class="fas fa-heart ecom-nav-icon"></i>
                    <span className="badge-number">6</span>
                </div>
            </div>
        </nav>
    )
}