import { createSlice, configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cart-slice";

const initialCartdState = { iscartdvisible: false }

const CartdSlice = createSlice({
    name: 'cartdstatechange',
    initialState: initialCartdState,
    reducers : {
        Cartd(state) {
            state.iscartdvisible = !state.iscartdvisible;
        }
    }
});

const store = configureStore({
    reducer : { cartd : CartdSlice.reducer, cart: cartSlice.reducer },
});

export const cartdActions = CartdSlice.actions;

export default store;