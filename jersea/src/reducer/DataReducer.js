export const initialState={
    products:[],
    category:[], 
    filter:{
        sortBy:'',
        rating:'',
        priceRange:'5500',
        inStock:false,
        search:'',
        categories:{
            'Laliga':false,
            'Premier League':false,
            'Serie-A':false,
            'Ligue-1':false,
        },
        cart:[],
        wishlist:[],
    }
}

export const DataReducer=(state,action) =>{
    switch (action.type) {
        case 'LOAD_PRODUCTS':
            return {...state,products:action.payload}

        case 'LOAD_CATEGORIES':
            return {...state,category:action.payload}
            
        case 'FILTER_DATA' :
            return {...state,filter:{...state.filter,[action.payload.filterName]:action.payload.filterValue}}

        case 'CLEAR_FILTER':
            return {...state, 
                    filter:{
                        sortBy:'',
                        rating:'',
                        priceRange:'5500',
                        inStock:false,
                        search:'',
                        categories:{
                            'Laliga':false,
                            'Serie-A':false,
                            'Premier League':false,
                            'Ligue-1':false,
                        },
                    }
        }

        case 'CART_DATA':
            return {...state,cart:action.payload}

        case 'WISHLIST_DATA':
            return {...state,wishlist:action.payload}
        
         default:
             return state;
    }
}