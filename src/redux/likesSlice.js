import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: [],
};

const likesSlice = createSlice({
    name:"CarlSlice",
    initialState,
    reducers:{
        addToLike:(state, action) =>{
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

export const {addToLike} = likesSlice.actions
export default likesSlice.reducer