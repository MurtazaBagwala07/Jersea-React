import React from 'react';
import '../../pages/css/main.css'

export const Header=()=>{
    return(
        <nav className="ecom-nav-container">
            <p className="ecom-nav-title">Jersea Store</p>
            <div className="ecom-nav-searchbar">
                <input className="ecom-nav-searchbar-input" type="text" placeholder="Search"/>
                <button className="search-btn"><i class="fa fa-search"></i></button>
            </div>
        
            <div className="ecom-nav-action-btns">
                <button className="ecom-nav-action-btn nav-btn-login">Login</button>
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