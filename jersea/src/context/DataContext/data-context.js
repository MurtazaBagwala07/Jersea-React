import React,{createContext, useEffect,useReducer} from "react";
import axios from "axios";
import {initialState,DataReducer} from '../../reducer/DataReducer.js'

export const DataContext = createContext();
export const DataProvider = ({children})=>{
    const [state,dispatch] = useReducer(DataReducer,initialState)
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
                console.log(resp)
                const {categories}=  resp.data;
                console.log(categories)
                dispatch({
                    type: 'LOAD_CATEGORIES',
                    payload : categories
                })
            } catch (error) {
                console.log(error)
            }
        })();
    },[])
    return(
    <DataContext.Provider value={{state,dispatch}}>
        {children}
    </DataContext.Provider>
    )
}

