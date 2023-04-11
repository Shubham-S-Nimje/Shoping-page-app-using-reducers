import { createSlice } from "@reduxjs/toolkit";

const initialCartdState = { iscartdvisible: false, notification: null }

const CartdSlice = createSlice({
    name: 'cartdstatechange',
    initialState: initialCartdState,
    reducers : {
        Cartd(state) {
            state.iscartdvisible = !state.iscartdvisible;
        },
        shownotification(state, action) {
            state.notification = {
                status: action.payload.status,
                title: action.payload.title,
                message: action.payload.message,
            }
        }
    }
});

export const cartdActions = CartdSlice.actions;
export default CartdSlice;