import React from 'react'
import './Cart.css'
import '../css/main.css'
import { useData} from '../../hooks'
import { CartCard,PriceCard } from '../../components'
export const Cart = () => {
    const {state} = useData()
  return (
        <main class="cart-main">
        <div class="cart-title">{`${state?.cart?.length===0?'No Items in Cart':`Cart Items (${state?.cart?.length})`} `}</div>
        {state?.cart?.length>0 && <div class="cart-container">
            <div class="cart-products">
                {state?.cart?.map((prod)=>{
                    return (
                        <CartCard prod={prod}/>
                    )
                })}
            </div>
            <PriceCard/>
        </div>}
    </main>
    
  )
}

