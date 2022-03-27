import axios from "axios";

export const GetCartService=async(token)=>{
    try {
        const response = await axios.get('/api/user/cart',{
            headers: { authorization: token }
        })
        if(response.status===200||response.status===201){
            return response.data.cart;
        }
    } catch (error) {
        
    }
}

export const AddToCartService=async(product,token)=>{
    const response = await axios.post('/api/user/cart',{product},{
        headers: { authorization: token }
    })
    return response
}

export const RemoveFromCartService=async(id,token)=>{
    const response = await axios.delete(`/api/user/cart/${id}`,{
        headers: { authorization: token }
    })
    return response;
}

export const CartQuantityService=async(id,token,type)=>{
    const response = await axios.post(`/api/user/cart/${id}`,{
        action: {
            type
          }
    },{
        headers: { authorization: token}
    })
    return response;
}