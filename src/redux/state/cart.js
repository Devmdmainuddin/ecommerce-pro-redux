
import { createSlice } from "@reduxjs/toolkit";

export const cartslice = createSlice({
    name: "cart",
    initialState: {
        items: localStorage.getItem("carts") ? JSON.parse(localStorage.getItem("carts")) : [],
    },
    reducers: {
        addToCart(state, action) {
            const { productId, quantity } = action.payload;
            const indexProctId = (state.items).findIndex(item => item.productId === productId);
            if (indexProctId >= 0) {
                state.items[indexProctId].quantity += quantity;
            }
            else {
                state.items.push({ productId, quantity })
            }
            localStorage.setItem("carts", JSON.stringify(state.items));
        },
        changeQuantity(state, action) {
            const { productId, quantity } = action.payload;
            const indexProctId = (state.items).findIndex(item => item.productId === productId);
            if (quantity > 0) {
                state.items[indexProctId].quantity = quantity;
            } else {
                state.items = (state.items).filter(item => item.productId !== productId);
                // delete state.items[indexProctId]
            }
            localStorage.setItem("carts", JSON.stringify(state.items));

        }
    }
})

export const { addToCart, changeQuantity } = cartslice.actions
export default cartslice.reducer;
