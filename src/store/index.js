import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cart-slice";
import CartdSlice from "./ui-slice";

const store = configureStore({
    reducer : { cartd : CartdSlice.reducer, cart: cartSlice.reducer },
});

export default store;