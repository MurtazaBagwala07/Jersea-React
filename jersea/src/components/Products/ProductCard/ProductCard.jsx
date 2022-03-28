import React,{useState,useEffect} from 'react'
import '../../../pages/css/main.css'
import { useWishlist,useAuth,useCart } from "../../../hooks";
import { AddToWishlistCall,RemoveFromWishlistCall,AddToCartService,RemoveFromCartService,CartQuantityService } from '../../../Services';



export const ProductCard=({prod})=>{
    const {auth} =useAuth();
    const {wishlist,setWishlist} =useWishlist();
    const {cart,setCart} = useCart();
    const [prodStatus,setProdStatus] = useState({
        inCart:false,
        inWishlist:false
    })
    useEffect(()=>{
        if(wishlist.wishlist){
            wishlist.wishlist.find((item)=>item._id===prod._id)&&
            setProdStatus({...prodStatus,inWishlist:true})
        }
        if(cart.cart){
            cart.cart.find((item)=>item._id===prod._id)&&
            setProdStatus({...prodStatus,inCart:true})
        }
    },[wishlist.wishlist,cart.cart])

    const addToWishlist =async(prod)=>{
        const resp=await AddToWishlistCall(prod,auth.token)
        if(resp.status===201||resp.status===200){
            setProdStatus({...prodStatus,inWishlist:true})
            setWishlist((prevData)=>({...prevData,wishlist:resp.data.wishlist}))
            console.log(prodStatus)
        }
    }

    const removeFromWishlist =async(prod)=>{
        const resp = await RemoveFromWishlistCall(prod._id,auth.token)
        if(resp.status===201||resp.status===200){
            const removedWishlist =wishlist.wishlist.filter((item)=>item._id!==prod._id)
            setProdStatus({...prodStatus,inWishlist:false})
            setWishlist((prevData)=>({...prevData,wishlist:removedWishlist}))
        }
    }

    const addToCart=async(prod)=>{
        const resp=await AddToCartService(prod,auth.token)
        if(resp.status===201||resp.status===200){
            setProdStatus({...prodStatus,inCart:true})
            setCart((prevData)=>({...prevData,cart:resp.data.cart}))
            console.log(prodStatus)
        }    
    }

    const removeFromCart =async(prod)=>{
        const resp = await RemoveFromCartService(prod._id,auth.token)
        if(resp.status===201||resp.status===200){
            // const removedCart =cart.cart.filter((item)=>item._id!==prod._id)
            setProdStatus({...prodStatus,inCart:false})
            setCart((prevData)=>({...prevData,cart:resp.data.cart}))
            console.log(prodStatus)
        }
    }

    

    return(
        <div className="prod-card-container">
            {prodStatus.inWishlist&&<div className="prod-card-wishlistbtn"><i onClick={()=>removeFromWishlist(prod)} class="fas fa-heart wishlisted"></i></div>}
            {!prodStatus.inWishlist&&<div className="prod-card-wishlistbtn"><i onClick={()=>addToWishlist(prod)} class="fas fa-heart"></i></div>}
            <img src={prod.image} alt={prod.name} className="prod-card-img"/>
            <div className="prod-card-title">{prod.name}</div>
            <div className="prod-card-price">₹{prod.price}</div>
            {prodStatus.inCart&& <button onClick={()=>removeFromCart(prod)} className="prod-card-cartbtn">Remove from cart</button>}
            {!prodStatus.inCart&&<button onClick={()=>addToCart(prod)} className="prod-card-cartbtn">Add to cart</button>}
        </div>
    )
}