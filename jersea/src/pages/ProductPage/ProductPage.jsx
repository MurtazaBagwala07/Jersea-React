import React from 'react';
import './ProductPage.css'
import {ProductList,ProductFilter} from '../../components'

export const ProductPage=()=>{
    return(
        <div class="main-content-listing">
            <ProductFilter/>
            <ProductList/>
        </div>
    )
}