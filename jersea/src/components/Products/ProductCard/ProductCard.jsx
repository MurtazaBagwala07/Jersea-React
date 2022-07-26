import React,{useState,useEffect} from 'react'
import '../../../pages/css/main.css'
import { useAuth,useData } from "../../../hooks";
import { AddToWishlistCall,RemoveFromWishlistCall,AddToCartService,RemoveFromCartService } from '../../../Services';

export const ProductCard=({prod})=>{
    const {auth} =useAuth();
    const {state,dispatch} =useData();
    
    const [inWishlist, setInWishlist] = useState(false)
    const [inCart, setInCart] = useState(false)

    const addToWishlist =async(prod)=>{
        const resp=await AddToWishlistCall(prod,auth.token)
        if(resp.status===201||resp.status===200){
            dispatch({
                type: 'WISHLIST_DATA',
                payload: resp.data.wishlist
            })
            setInWishlist(true)
        }
    }

    const removeFromWishlist =async(prod)=>{
        const resp = await RemoveFromWishlistCall(prod._id,auth.token)
        if(resp.status===201||resp.status===200){
            dispatch({
                type: 'WISHLIST_DATA',
                payload: resp.data.wishlist
            })
            setInWishlist(false)
        }
    }

    const addToCart=async(prod)=>{
        const resp=await AddToCartService(prod,auth.token)
        if(resp.status===201||resp.status===200){
            dispatch({
                type:'CART_DATA',
                payload: resp.data.cart
            })
            setInCart(true)
        }    
    }

    const removeFromCart =async(prod)=>{
        const resp = await RemoveFromCartService(prod._id,auth.token)
        if(resp.status===201||resp.status===200){
            dispatch({
                type:'CART_DATA',
                payload: resp.data.cart
            })
            setInCart(false)
        }
    }

    useEffect(()=>{
        if(state.wishlist){
            state.wishlist.find((item) => item._id === prod._id) &&
            setInWishlist(true)
        }
        if(state.cart){
            state.cart.find((item) => item._id === prod._id) &&
            setInCart(true)
        }
        console.log('render')
    },[state,removeFromCart,removeFromWishlist])

    

    return(
        <div className="prod-card-container">
            {inWishlist &&<div className="prod-card-wishlistbtn"><i onClick={()=>removeFromWishlist(prod)} class="fas fa-heart wishlisted"></i></div>}
            {!inWishlist&&<div className="prod-card-wishlistbtn"><i onClick={()=>addToWishlist(prod)} class="fas fa-heart"></i></div>}
            <img src={prod.image} alt={prod.name} className="prod-card-img"/>
            <div className="prod-card-title">{prod.name}</div>
            <div className="prod-card-price">₹{prod.price}</div>
            {inCart&& <button onClick={()=>removeFromCart(prod)} className="prod-card-cartbtn">Remove from cart</button>}
            {!inCart&&<button onClick={()=>addToCart(prod)} className="prod-card-cartbtn">Add to cart</button>}
        </div>
    )
}