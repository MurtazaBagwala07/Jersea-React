import React from 'react'
import './PriceCard.css'
import {useData} from '../../../hooks'
import { useNavigate } from 'react-router-dom'

export const PriceCard = () => {
    const navigate = useNavigate();
    const {state} =useData();
    const totalPrice=state.cart.reduce((acc,curr)=>acc+curr.price*curr.qty,0)
    const deliveryCharges = 200;
    const finalPrice = totalPrice+deliveryCharges;

    // const name=localStorage.getItem('userName')
    // const email =localStorage.getItem('userEmail')

    //RAZORPAY INTEGRATION 
    const loadScript = async (url) => {
        return new Promise((resolve) => {
            const script = document.createElement('script');
            script.src = url;

            script.onload = () => {
                resolve(true);
            };

            script.onerror = () => {
                resolve(false);
            };
            document.body.appendChild(script);
        });
    };

    const displayRazorpay = async () => {
        const res = await loadScript(
            'https://checkout.razorpay.com/v1/checkout.js'
        );

        if (!res) {
            console.error('Razorpay SDK failed to load, check you connection');
            return;
        }

        const options = {
            key: 'rzp_test_bIUEsaVDFpRuCt',
            amount: finalPrice * 100,
            currency: 'INR',
            name: 'Jersea',
            description: 'Thank you for shopping with us',
            image:
                'https://us.123rf.com/450wm/stellar001/stellar0011408/stellar001140800234/30479518-delivered-products-home-delivery-delivery-man.jpg',
            handler: function (response) {
                response.razorpay_payment_id && navigate(`/success`)
            },
            prefill: {
                name:'test',
                email: 'test@gmail.com',

            },
            theme: {
                color: '#024991',
            },
        };
        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
    };


  return (
    <div class="cart-summary-container">
                <div class="cart-summary-title">Price Details</div>
                <hr/>
                <div class="cart-summary-price">
                    <p>Price ({state?.cart?.length} items)</p>
                    <p>{totalPrice*2}</p>
                </div>
                <div class="cart-summary-discount">
                    <p>Discount</p>
                    <p>-{totalPrice}</p>
                </div>
                <div class="cart-summary-delivery">
                    <p>Delivery Charges</p>
                    <p>{deliveryCharges}</p>
                </div>
                <hr/>
                <div class="cart-summary-total-amount">
                    <p>Total amount</p>
                    <p>{finalPrice}</p>
                </div>
                <hr/>
                <div class="cart-summary-money-saved"></div>
                <button class="cart-order-button" onClick={()=>displayRazorpay()}>Place Order</button>
            </div>
  )
}

