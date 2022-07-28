import React,{useState,useEffect} from 'react'
import '../../../pages/css/main.css'
import './ProductCard.css'
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
    },[state,removeFromCart,removeFromWishlist])

    

    return(
        <div className="prod-card-container">
            <div className="prod-card-rating"><i class="fas fa-star"></i>{prod.rating}</div>
            <img src={prod.image} alt={prod.name} className="prod-card-img"/>
            <div className="prod-card-details"><span className='prod-card-name'>{prod.name}</span> <span className='prod-card-price'>₹{prod.price}</span></div>
            <div className="prod-card-details"><span className='prod-card-cat'>{prod.categoryName}</span> <span className={prod.inStock?'prod-card-instock stocked':'prod-card-instock out-of-stock'}>{prod.inStock?'In Stock' : 'Out of Stock'}</span></div>
            <div className="prod-card-btns">
                {inCart? <button disabled={!prod.inStock} onClick={()=>removeFromCart(prod)} className={prod.inStock ?"prod-card-cartbtn":"prod-card-cartbtn cartbtn-disabled"}>Remove <i class="fas fa-shopping-cart"></i></button>:<button disabled={!prod.inStock} onClick={()=>addToCart(prod)} className={prod.inStock ?"prod-card-cartbtn":"prod-card-cartbtn cartbtn-disabled"}>Add <i class="fas fa-shopping-cart"></i></button>}
                {inWishlist? <button onClick={()=>removeFromWishlist(prod)} className="prod-card-cartbtn"><i class="fas fa-heart wishlisted"></i></button>:<button onClick={()=>addToWishlist(prod)} className="prod-card-cartbtn"><i class="fas fa-heart"></i></button>}
            </div>
            
        </div>
    )
}