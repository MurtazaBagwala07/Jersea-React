import React from 'react'
import './PriceCard.css'
import {useData} from '../../../hooks'

export const PriceCard = () => {
    const {state} =useData();
    const totalPrice=state.cart.reduce((acc,curr)=>acc+curr.price*curr.qty,0)
    const deliveryCharges = 200;
    const finalPrice = totalPrice+deliveryCharges;
  return (
    <div class="cart-summary-container">
                <div class="cart-summary-title">Price Details</div>
                <hr/>
                <div class="cart-summary-price">
                    <p>Price (2 items)</p>
                    <p>{totalPrice*2}</p>
                </div>
                <div class="cart-summary-discount">
                    <p>Discount</p>
                    <p>-{totalPrice}</p>
                </div>
                <div class="cart-summary-delivery">
                    <p>Delivery Charges</p>
                    <p>{deliveryCharges}</p>
                </div>
                <hr/>
                <div class="cart-summary-total-amount">
                    <p>Total amount</p>
                    <p>{finalPrice}</p>
                </div>
                <hr/>
                <div class="cart-summary-money-saved"></div>
                <button class="cart-order-button">Place Order</button>
            </div>
  )
}

