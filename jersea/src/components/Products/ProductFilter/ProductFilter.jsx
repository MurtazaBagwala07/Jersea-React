import React from 'react';
import './ProductFilter.css'
import { useData } from '../../../hooks';

export const ProductFilter=()=>{
    const {state,dispatch} =useData();
    return(
        <aside className="ecom-filter flex-column">
        <div className="ecom-filter-header">
            <span className="ecom-filter-title">Filter</span>
            <span className='ecom-filter-clear' onClick={()=>dispatch({type:'CLEAR_FILTER'})}>Clear</span>
        </div>
        <hr></hr>
        <div className="ecom-filter-price">
            <label for="price">Price</label>
            <input onChange={(e)=>dispatch({type:'FILTER_DATA', payload:{filterName:'priceRange',filterValue:e.target.value}})} min='0' step='500' value={state.filter.priceRange} max='5500' type="range"/>
            <span>{state.filter.priceRange}</span>
        </div>
        <div className="ecom-filter-category flex-column">
            <p for="category">Category</p>
            <label for="league"><input 
            checked={state.filter.categories['Laliga']} 
            onChange={()=>{dispatch({type:'FILTER_DATA' , payload:{filterName:'categories',filterValue:{...state.filter.categories,'Laliga':!state.filter.categories['Laliga']}}})}} 
            className="filter-label" type="checkbox"/>Laliga</label>
            
            <label for="league"><input 
            checked={state.filter.categories['Premier League']} 
            onChange={()=>{dispatch({type:'FILTER_DATA' , payload:{filterName:'categories',filterValue:{...state.filter.categories,'Premier League':!state.filter.categories['Premier League']}}})}}
            className="filter-label" type="checkbox"/>Premier League</label>
            
            <label for="league"><input 
            checked={state.filter.categories['Serie-A']}
            onChange={()=>{dispatch({type:'FILTER_DATA' , payload:{filterName:'categories',filterValue:{...state.filter.categories,'Serie-A':!state.filter.categories['Serie-A']}}})}} 
            className="filter-label" type="checkbox"/>Serie-A</label>
            
            <label for="league"><input 
            checked={state.filter.categories['Ligue-1']} 
            onChange={()=>{dispatch({type:'FILTER_DATA' , payload:{filterName:'categories',filterValue:{...state.filter.categories,'Ligue-1':!state.filter.categories['Ligue-1']}}})}}
            className="filter-label" type="checkbox"/>Ligue-1</label>
        </div>

        <div className="ecom-filter-rating flex-column">
            <p>Rating</p>
            <label for="rating"><input
            checked={state.filter.rating==='4_AND_ABOVE'?true:false}
            onClick={()=>dispatch({type:'FILTER_DATA', payload:{filterName:'rating', filterValue:'4_AND_ABOVE'}})}
            className="filter-label" type="radio" name="rating"/>4 and above</label>

            <label for="rating"><input 
            checked={state.filter.rating==='3_AND_ABOVE'?true:false}
            onClick={()=>dispatch({type:'FILTER_DATA', payload:{filterName:'rating', filterValue:'3_AND_ABOVE'}})}
            className="filter-label" type="radio" name="rating"/>3 and above</label>

            <label for="rating"><input 
            checked={state.filter.rating==='2_AND_ABOVE'?true:false}
            onClick={()=>dispatch({type:'FILTER_DATA', payload:{filterName:'rating', filterValue:'2_AND_ABOVE'}})}
            className="filter-label" type="radio" name="rating"/>2 and above</label>
            
            <label for="rating"><input
            checked={state.filter.rating==='1_AND_ABOVE'?true:false} 
            onClick={()=>dispatch({type:'FILTER_DATA', payload:{filterName:'rating', filterValue:'1_AND_ABOVE'}})}
            className="filter-label" type="radio" name="rating"/>1 and above</label>
        </div>

        <div className="ecom-filter-rating flex-column">
            <p>Availability</p>
            <label for="stock"><input
            checked={state.filter.inStock}  
            onChange={()=>{dispatch({type:'FILTER_DATA' , payload:{filterName:'inStock',filterValue:!state.filter.inStock}})}}
            className="filter-label" type="checkbox" name="stock"/>In Stock</label>
        </div>
        <div className="ecom-filter-sort flex-column">
            <p for="sort">Sort By</p>
            <label for=""><input className="filter-label"
            checked={state.filter.sortBy==='HIGH_TO_LOW'?true:false} 
            onClick={()=>dispatch({type:'FILTER_DATA' , payload:{filterName:'sortBy',filterValue:'HIGH_TO_LOW'}})}
            type="radio" name="sort"/>Price : High to Low</label>

            <label for=""><input className="filter-label" 
            checked={state.filter.sortBy==='LOW_TO_HIGH'?true:false} 
            onClick={()=>dispatch({type:'FILTER_DATA' , payload:{filterName:'sortBy',filterValue:'LOW_TO_HIGH'}})}
            type="radio" name="sort"/>Price : Low to High</label>
        </div>
    </aside>
    )
}