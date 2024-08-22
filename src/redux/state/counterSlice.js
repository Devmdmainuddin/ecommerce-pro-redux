import { createSlice } from "@reduxjs/toolkit";

export const counterslice=createSlice({

    name:"counter",
    initialState:{
        value:1 ,
    },
    reducers:{
        increment:(state)=>{
            state.value=state.value+1;
        },
        decrement:(state)=>{
            if(state.value>0){
                state.value=state.value-1;
            }
            }
            
    }
})
export const {increment,decrement}= counterslice.actions;
export default counterslice.reducer;