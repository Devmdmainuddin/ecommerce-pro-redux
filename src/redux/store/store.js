import { configureStore } from "@reduxjs/toolkit";
import  cartReducer from '../state/cart'

export default configureStore({

    reducer:{
        cart:cartReducer
    }
})
