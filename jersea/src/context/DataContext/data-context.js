import React,{createContext, useEffect,useReducer} from "react";
import axios from "axios";
import {initialState,DataReducer} from '../../reducer/DataReducer.js'
import {useAuth} from '../../hooks'
import {GetWishlistService} from '../../Services'
import {GetCartService} from '../../Services/CartServices'

export const DataContext = createContext();

export const DataProvider = ({children})=>{
    const [state,dispatch] = useReducer(DataReducer,initialState)
    const {auth}= useAuth();
    useEffect(()=>{
        (async()=>{
            try {
                const resp = await axios.get('/api/products')
                const {products}=  resp.data;
                dispatch({
                    type: 'LOAD_PRODUCTS',
                    payload : products
                })
            } catch (error) {
                console.log(error)
            }
        })();
        (async()=>{
            try {
                const resp = await axios.get('/api/categories')
                const {categories}=  resp.data;
                dispatch({
                    type: 'LOAD_CATEGORIES',
                    payload : categories
                })
            } catch (error) {
                console.log(error)
            }
        })();
    },[])


    useEffect(()=>{
        (async ()=>{
            if(auth.isAuth){
                const wishlistData = await GetWishlistService(auth.token)
                const cartData = await GetCartService(auth.token)
                dispatch({
                    type: 'CART_DATA',
                    payload : cartData.data.cart
                })
                dispatch({
                    type:'WISHLIST_DATA',
                    payload : wishlistData.data.wishlist
                })
            }            
        })();
    },[auth.isAuth])


    return(
    <DataContext.Provider value={{state,dispatch}}>
        {children}
    </DataContext.Provider>
    )
}

