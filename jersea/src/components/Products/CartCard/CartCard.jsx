import React,{useState,useEffect} from 'react'
import './CartCard.css'
import { useAuth, useData } from "../../../hooks";
import { AddToWishlistCall,RemoveFromWishlistCall,RemoveFromCartService,CartQuantityService } from '../../../Services';
import {toastHandler} from '../../../utils/utilFilterFunctions'


export const CartCard = ({prod}) => {
    const {auth} =useAuth();
    const {state,dispatch} = useData();
    
    const removeFromCart =async(prod)=>{
        const resp = await RemoveFromCartService(prod._id,auth.token)
        if(resp.status===201||resp.status===200){
            toastHandler('success', 'Removed from cart');
            dispatch({
                type: 'CART_DATA',
                payload:resp.data.cart
            })
        }
    }

    const cartQuantityChange=async(prod,type)=>{
        let resp;
        if(prod.qty===1 && type==='decrement'){
            resp= await RemoveFromCartService(prod._id,auth.token)
            toastHandler('success', 'Removed from cart');
        }else{
            resp=await CartQuantityService(prod._id,auth.token,type)
            toastHandler('success', 'Product quantity updated');
        }
        if(resp.status===201||resp.status===200){
            dispatch({
                type: 'CART_DATA',
                payload:resp.data.cart
            })  
        }
    }

  return (
        <div class="card-detailed">
            <div class="cart-detailed-img-container">
                <img class="cart-detailed-img" src={prod.image} alt="prod-img"/>
            </div>
            <div class="card-detailed-container">
                <div class="card-detailed-title">{prod.name}</div>
                <div class="card-detailed-price">
                    <span class="prod-sell-price">₹{prod.price}</span> <span class="prod-total-price">₹{prod.price*2}</span>
                </div>
                <div class="card-detailed-discount">50% off</div>
                <div class="card-detailed-quantity">
                    <p>Quantity : </p>
                    <button onClick={()=>cartQuantityChange(prod,'decrement')} class="prod-quantity">-</button>
                    <p>{prod.qty}</p>
                    <button onClick={()=>cartQuantityChange(prod,'increment')} class="prod-quantity">+</button>
                </div>
                <div class="card-detailed-action-btns">
                    <button onClick={()=>removeFromCart(prod)} class="card-detailed-action-btn">Remove from cart</button>
                    {/* {prodStatus.inWishlist&&<button onClick={()=>addToWishlist(prod)} class="card-detailed-action-btn">Move to Wishlist</button>}
                    {!prodStatus.inWishlist&&<button onClick={()=>removeFromWishlist(prod)} class="card-detailed-action-btn">Remove from Wishlist</button>} */}

                </div>
                </div>
        </div>
  )
}

