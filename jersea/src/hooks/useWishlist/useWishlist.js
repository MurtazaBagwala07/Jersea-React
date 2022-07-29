import { WishlistContext } from '../../context'
import { useContext } from 'react'

export const useWishlist = ()=>useContext(WishlistContext)