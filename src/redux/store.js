import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice"
import likesSlice from "./likesSlice"

export const store = configureStore({
    reducer: {
        cart: cartSlice, 
        like: likesSlice,
    },
})