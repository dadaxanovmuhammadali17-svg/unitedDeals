import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: [],
};

const cartSlice = createSlice({
    name:"CarlSlice",
    initialState,
    reducers:{
        addToCart:(state, action) =>{
            const product = action.payload;
            const excist = state.value.find((item) => item.id === product.id );

            if(excist){
                excist.quantity +=1;

            }else{
                state.value.push({...product, quantity: 1})
            }
        },
    },
});

export const {addToCart} = cartSlice.actions
export default cartSlice.reducer