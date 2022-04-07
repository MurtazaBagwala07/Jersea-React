import React from 'react';
import '../../pages/css/main.css'
import './Header.css'
import { useAuth } from '../../hooks';
import { useNavigate,Link } from "react-router-dom";
import{useCart,useWishlist} from '../../hooks'

export const Header=()=>{
    const {auth,setAuth,initialAuth} =useAuth();
    const navigate = useNavigate();
    const {cart} = useCart();
    const {wishlist} = useWishlist();

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
                {auth.isAuth && <button onClick={LogOutHandler} className="ecom-nav-action-btn nav-btn-login"><i class="fas fa-sign-out-alt"></i></button>}
                
                    <div onClick={()=>navigate('/cart')} className="ecom-nav-action-btn badge">
                        <i class="fas fa-shopping-cart ecom-nav-icon"></i>
                        <span className="badge-number">{cart.cart.length}</span>
                    </div>
            
                    <div onClick={()=>navigate('/wishlist')} className="ecom-nav-action-btn badge">
                        <i class="fas fa-heart ecom-nav-icon"></i>
                        <span className="badge-number">{wishlist.wishlist.length}</span>
                    </div>
            </div>
        </nav>
    )
}