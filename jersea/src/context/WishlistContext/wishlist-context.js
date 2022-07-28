import { createContext,useEffect,useState } from "react";
import {useAuth} from '../../hooks'
import {GetWishlistService} from '../../Services'

export const WishlistContext = createContext();

export const WishlistProvider=({children})=>{
    const {auth}= useAuth();
    const [wishlist,setWishlist] = useState({
        wishlist:[], wishlistLoading:'',wishlistError:''
    });
    useEffect(()=>{
        (async ()=>{
            if(auth.isAuth){
                const wishlistData = await GetWishlistService(auth.token)
                setWishlist((prevWishlist)=>({...prevWishlist,wishlist:wishlistData}))
                console.log(wishlist)
            }            
        })();
    },[auth.isAuth])
    return (
        <WishlistContext.Provider value={{wishlist,setWishlist}}>
            {children} 
        </WishlistContext.Provider>
    )
}