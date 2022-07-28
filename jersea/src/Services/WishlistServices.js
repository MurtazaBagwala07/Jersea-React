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

export const AddToWishlistCall=async(product,token)=>{
    console.log(product,token)
    const response= await axios.post(
		"/api/user/wishlist",
		{ product },
		{ headers: { authorization: token } }
	);
    return response
}


export const RemoveFromWishlistCall=async(id,token)=>{
    const response= axios.delete(`/api/user/wishlist/${id}`, {
		headers: { authorization: token },
	});
    return response
}