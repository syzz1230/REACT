import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartslice" 


const Store = configureStore({
    reducer : {
        cart : cartSlice,
    },
});

export default Store;