import React from 'react'
import '../../../pages/css/main.css'

export const ProductCard=({prod})=>{
    return(
        <div className="prod-card-container">
            <div className="prod-card-wishlistbtn"><i class="fas fa-heart"></i></div>
            <img src={prod.image} alt={prod.name} className="prod-card-img"/>
            <div className="prod-card-title">{prod.name}</div>
            <div className="prod-card-price">₹{prod.price}</div>
            <button className="prod-card-cartbtn">Add to cart</button>
        </div>
    )
}