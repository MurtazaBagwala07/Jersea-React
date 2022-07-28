import React from 'react'
import './Cart.css'
import '../css/main.css'
import {useCart} from '../../hooks'
import { CartCard,PriceCard } from '../../components'
export const Cart = () => {
    const {cart} = useCart()
  return (
        <main class="cart-main">
        <div class="cart-title">{`${cart.cart.length===0?'No Items in Cart':`Cart Items (${cart.cart.length})`} `}</div>
        {cart.cart.length>0 && <div class="cart-container">
            <div class="cart-products">
                {cart.cart.map((prod)=>{
                    return (
                        <CartCard prod={prod}/>
                    )
                })}
            </div>
            <PriceCard/>
        </div>}
    </main>
    
  )
}

