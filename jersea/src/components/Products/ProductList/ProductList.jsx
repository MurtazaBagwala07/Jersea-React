import React from "react";
import './ProductList.css';
import { useData } from "../../../hooks";
import {ProductCard} from '../../index'
import {sortData,ratingFilter,categoryData,stockCheck, priceControl} from '../../../utils/utilFilterFunctions'



export const ProductList=()=>{
    const {state,dispatch} = useData();
    const productsList = state.products;
    let filteredData = sortData(productsList,state.filter.sortBy)
    filteredData=ratingFilter([...filteredData],state.filter.rating)
    filteredData=stockCheck([...filteredData],state.filter.inStock)
    filteredData=categoryData([...filteredData],state.filter.categories)
    filteredData=priceControl([...filteredData],state.filter.priceRange)
    // console.log(filteredData)
    const displayList = filteredData.map(prod=>{
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