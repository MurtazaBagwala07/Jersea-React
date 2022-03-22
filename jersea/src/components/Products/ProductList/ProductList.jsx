import React from "react";
import './ProductList.css';
import { useData } from "../../../hooks";
import {ProductCard} from '../../index'

export const ProductList=()=>{
    const {state,dispatch} = useData();
    const productsList = state.products;
    const displayList = productsList.map(prod=>{
        return(
            <ProductCard key={prod.id} prod={prod}/>
        )
    })
    return(
        <div className="product-listing-main">
            {displayList}
        </div>
    )
}