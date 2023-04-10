import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialCartState = { iscartvisible: false }

const CartSlice = createSlice({
    name: 'cartstatechange',
    initialState: initialCartState,
    reducers : {
        Cart(state) {
            state.iscartvisible = !state.iscartvisible;
        }
    }
});

const store = configureStore({
    reducer : { cart : CartSlice.reducer },
});

export const cartActions = CartSlice.actions;

export default store;