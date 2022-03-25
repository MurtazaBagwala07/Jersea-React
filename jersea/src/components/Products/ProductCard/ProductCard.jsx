import React,{useState,useEffect} from 'react'
import '../../../pages/css/main.css'
import { useData,useWishlist,useAuth } from "../../../hooks";
import { AddToWishlistCall,RemoveFromWishlistCall } from '../../../Services';



export const ProductCard=({prod})=>{
    const {auth} =useAuth();
    const {wishlist,setWishlist} =useWishlist();
    const [prodStatus,setProdStatus] = useState({
        inCart:false,
        inWishlist:false
    })
    useEffect(()=>{
        if(wishlist.wishlist){
            wishlist.wishlist.find((item)=>item._id===prod._id)&&
            setProdStatus({...prodStatus,inWishlist:true})
        }
    },[wishlist.wishlist])

    const addToWishlist =async(prod)=>{
        const resp=await AddToWishlistCall(prod,auth.token)
        if(resp.status===201||resp.status===200){
            setWishlist((prevData)=>({...prevData,wishlist:[...prevData.wishlist,prod]}))
            setProdStatus({...prodStatus,inWishlist:true})
        }
    }

    const removeFromWishlist =async(prod)=>{
        const resp = await RemoveFromWishlistCall(prod._id,auth.token)
        console.log(resp)
        if(resp.status===201||resp.status===200){
            const removedWishlist =wishlist.wishlist.filter((item)=>item._id!==prod._id)
            setWishlist((prevData)=>({...prevData,wishlist:removedWishlist}))
            setProdStatus({...prodStatus,inWishlist:false})
        }
    }

    

    return(
        <div className="prod-card-container">
            {prodStatus.inWishlist&&<div className="prod-card-wishlistbtn"><i onClick={()=>removeFromWishlist(prod)} class="fas fa-heart wishlisted"></i></div>}
            {!prodStatus.inWishlist&&<div className="prod-card-wishlistbtn"><i onClick={()=>addToWishlist(prod)} class="fas fa-heart"></i></div>}
            <img src={prod.image} alt={prod.name} className="prod-card-img"/>
            <div className="prod-card-title">{prod.name}</div>
            <div className="prod-card-price">₹{prod.price}</div>
            <button className="prod-card-cartbtn">Add to cart</button>
        </div>
    )
}