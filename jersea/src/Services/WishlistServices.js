import axios from "axios";

export const GetWishlistService=async(token)=>{
    try {
        const response= await axios.get('/api/user/wishlist',{
            headers:{authorization: token}
        })
        if(response.status===200||response.status===201){
            console.log(response.data.wishlist)
            return response.data.wishlist
        }
        
        
    } catch (error) {
        console.log(error)
    }
}