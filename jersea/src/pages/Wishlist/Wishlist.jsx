import React from 'react'
import './Wishlist.css'
import '../css/main.css'
import {useWishlist} from '../../hooks'
import { ProductCard } from '../../components'

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
                    <ProductCard prod={item}/>
                )
            })}
            
        </div>
    </main>
  )
}

