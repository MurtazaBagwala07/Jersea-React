import React from 'react';
import './ProductFilter.css'

export const ProductFilter=()=>{
    return(
        <aside className="ecom-filter flex-column">
        <div className="ecom-filter-header">
            <span>Filter</span>
            <span>Clear</span>
        </div>
        <div className="ecom-filter-price">
            <label for="price">Price</label>
            <input type="range"/>
        </div>
        <div className="ecom-filter-category flex-column">
            <p for="category">Category</p>
            <label for="league"><input className="filter-label" type="checkbox"/>Laliga</label>
            <label for="league"><input className="filter-label" type="checkbox"/>Premier League</label>
            <label for="league"><input className="filter-label" type="checkbox"/>Serie-A</label>
            <label for="league"><input className="filter-label" type="checkbox"/>Ligue-1</label>
        </div>
        <div className="ecom-filter-rating flex-column">
            <p>Rating</p>
            <label for="rating"><input className="filter-label" type="checkbox" name="rating"/>4 and above</label>
            <label for="rating"><input className="filter-label" type="checkbox" name="rating"/>3 and above</label>
            <label for="rating"><input className="filter-label" type="checkbox" name="rating"/>2 and above</label>
            <label for="rating"><input className="filter-label" type="checkbox" name="rating"/>1 and above</label>
        </div>
        <div className="ecom-filter-rating flex-column">
            <p>Availability</p>
            <label for="stock"><input className="filter-label" type="checkbox" name="stock"/>In Stock</label>
        </div>
        <div className="ecom-filter-sort flex-column">
            <p for="sort">Sort By</p>
            <label for=""><input className="filter-label" type="radio" name="sort"/>Price : High to Low</label>
            <label for=""><input className="filter-label" type="radio" name="sort"/>Price : Low to High</label>
        </div>
    </aside>
    )
}