export const initialState={
    products:[]
}

export const DataReducer=(state,action) =>{
    switch (action.type) {
        case 'LOAD_PRODUCTS':
            return {...state,products:action.payload}
        
         default:
             return state;
    }
}