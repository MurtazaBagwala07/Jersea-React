import React from 'react'
import './Wishlist.css'
import '../css/main.css'
import {useData} from '../../hooks'
import { ProductCard } from '../../components'

export const Wishlist = () => {
    const {state} = useData()
  return (
    <main class="main-content-wishlist">
        <div class="wishlist-title">
            {`${state?.wishlist?.length>0?'Wishlist':'No Items in Wishlist'}`}
        </div>
        {state?.wishlist?.length>0 && <div class="wishlist-prod-container">
            {state?.wishlist?.map((item)=>{
                return(
                    <ProductCard prod={item}/>
                )
            })}
        </div>}
    </main>
  )
}

