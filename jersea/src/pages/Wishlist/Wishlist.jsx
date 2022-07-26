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
            Wishlist
        </div>
        <div class="wishlist-prod-container">
            {state?.wishlist?.map((item)=>{
                return(
                    <ProductCard prod={item}/>
                )
            })}
        </div>
    </main>
  )
}

