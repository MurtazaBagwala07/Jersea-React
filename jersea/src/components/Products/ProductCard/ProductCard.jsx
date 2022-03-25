import React,{useState,useEffect} from 'react'
import '../../../pages/css/main.css'
import { useData,useWishlist,useAuth } from "../../../hooks";



export const ProductCard=({prod})=>{
    const {auth} =useAuth();
    const {wishlist,setWishlist} =useWishlist();
    const [prodStatus,setProdStatus] = useState({
        inCart:false,
        inWishlist:false
    })





    const addToWishlist =(prod)=>{
        setWishlist((prevData)=>({...prevData,wishlist:[...prevData.wishlist,prod]}))
        console.log(wishlist.wishlist)
    }

    useEffect(()=>{
        
        const found= wishlist.wishlist.filter((item)=>item._id===prod._id)
        if(found){
            setProdStatus((prev)=>({...prev,inWishlist:true}))   
        }
    },[])

    return(
        <div className="prod-card-container">
            <div className="prod-card-wishlistbtn"><i onClick={()=>addToWishlist(prod)} class="fas fa-heart"></i></div>
            <img src={prod.image} alt={prod.name} className="prod-card-img"/>
            <div className="prod-card-title">{prod.name}</div>
            <div className="prod-card-price">₹{prod.price}</div>
            <button className="prod-card-cartbtn">Add to cart</button>
        </div>
    )
}