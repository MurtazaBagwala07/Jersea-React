import { createContext,useEffect,useState } from "react";
import {useAuth} from '../../hooks'
import { GetCartService } from "../../Services";

export const CartContext = createContext();

export const CartProvider=({children})=>{
    const {auth}=useAuth();
    const [cart,setCart] = useState({
        cart:[],cartLoading:'',cartError:''
    })
    useEffect(()=>{
        (async ()=>{
            if(auth.isAuth){
                const cartData = await GetCartService(auth.token)
                setCart((prevCart)=>({...prevCart,cart:cartData}))
                console.log(cart)
            }            
        })();
    },[auth.isAuth])
    return(
        <CartContext.Provider value={{cart,setCart}}>
            {children}
        </CartContext.Provider>
    )
}