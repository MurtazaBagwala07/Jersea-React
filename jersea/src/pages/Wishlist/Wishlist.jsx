import React from 'react'
import './Wishlist.css'
import '../css/main.css'
import {useWishlist} from '../../hooks'

export const Wishlist = () => {
    const {wishlist} = useWishlist()
    console.log(wishlist)
  return (
    <main class="main-content-wishlist">
        <div class="wishlist-title">
            Wishlist
        </div>
        <div class="wishlist-prod-container">
            {wishlist.wishlist.map((item)=>{
                return(
                    <div class="prod-card-container">
                        <div class="prod-card-wishlistbtn"><i class="fas fa-heart wishlisted"></i></div>
                        <img src="http://www.designfootball.com/images/joomgallery/thumbnails/football_kits_120/real_madrid_17_18_home_jersey_leaked_20170322_1352970243.png" alt="product" class="prod-card-img"/>
                        <div class="prod-card-title">{item.name}</div>
                        <div class="prod-card-price">₹{item.price}</div>
                        <button class="prod-card-cartbtn">Add to cart</button>
                    </div>
                )
            })}
            
        </div>
    </main>
  )
}

