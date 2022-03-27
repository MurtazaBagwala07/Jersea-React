import React,{useState,useEffect} from 'react'
import './CartCard.css'
import { useWishlist,useAuth,useCart } from "../../../hooks";
import { AddToWishlistCall,RemoveFromWishlistCall,RemoveFromCartService,CartQuantityService } from '../../../Services';


export const CartCard = ({prod}) => {
    const {auth} =useAuth();
    const {wishlist,setWishlist} =useWishlist();
    const {cart,setCart} = useCart();
    // const [prodStatus,setProdStatus] = useState({
    //     inCart:false,
    //     inWishlist:false
    // })
    // useEffect(()=>{
    //     if(wishlist.wishlist){
    //         wishlist.wishlist.find((item)=>item._id===prod._id)&&
    //         setProdStatus({...prodStatus,inWishlist:true})
    //     }
    //     if(cart.cart){
    //         cart.cart.find((item)=>item._id===prod._id)&&
    //         setProdStatus({...prodStatus,inCart:true})
    //     }
    // },[wishlist.wishlist,cart.cart])

    // const addToWishlist =async(prod)=>{
    //     const resp=await AddToWishlistCall(prod,auth.token)
    //     if(resp.status===201||resp.status===200){
    //         setWishlist((prevData)=>({...prevData,wishlist:[...prevData.wishlist,prod]}))
    //         setProdStatus({...prodStatus,inWishlist:true})
    //     }
    // }

    // const removeFromWishlist =async(prod)=>{
    //     const resp = await RemoveFromWishlistCall(prod._id,auth.token)
    //     if(resp.status===201||resp.status===200){
    //         const removedWishlist =wishlist.wishlist.filter((item)=>item._id!==prod._id)
    //         setWishlist((prevData)=>({...prevData,wishlist:removedWishlist}))
    //         setProdStatus({...prodStatus,inWishlist:false})
    //     }
    // }

    const removeFromCart =async(prod)=>{
        const resp = await RemoveFromCartService(prod._id,auth.token)
        if(resp.status===201||resp.status===200){
            // const removedCart =cart.cart.filter((item)=>item._id!==prod._id)
            console.log(resp.data.cart)
            setCart((prevData)=>({...prevData,cart:resp.data.cart}))
            // setProdStatus({...prodStatus,inCart:false})
        }
    }

    const cartQuantityChange=async(prod,type)=>{
        let resp;
        if(prod.qty===1 && type==='decrement'){
            resp= await RemoveFromCartService(prod._id,auth.token)
        }else{
            resp=await CartQuantityService(prod._id,auth.token,type)
        }
        if(resp.status===201||resp.status===200){
            setCart((prevData)=>({...prevData,cart:resp.data.cart}))
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

