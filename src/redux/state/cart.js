
import { createSlice } from "@reduxjs/toolkit";

export const cartslice=createSlice({
    name:"cart",
    initialState:{
        items:[] ,
    },
    reducers:{
addToCart(state,action){
    const {productId,quantity}= action.payload;
    const indexProctId= (state.items).findIndex(item=>item.productId === productId);
    if(indexProctId >=0){
        state.items[indexProctId].quantity +=quantity;
    }
    else{
        state.items.push({productId,quantity})
    }
    
}
    }
})

export const {addToCart}= cartslice.actions
export default cartslice.reducer;
