import React from 'react';
import './ProductPage.css'
import {ProductList,ProductFilter} from '../../components/index'

export const ProductPage=()=>{
    return(
        <div class="main-content-listing">
            <ProductFilter/>
            <ProductList/>
        </div>
    )
}