import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    //need three things
    name: 'cart',  //name of the slice(box)
    initialState:{
        cartItems:[]  //store value in this array
    },
    reducers:{
        addItems: (state, action) => {  //dispatch action and reducer function
           state.cartItems.push(action.payload)
        },
        
        removeItems: (state, action) => {  
           state.cartItems.pop();
        },

        clearItems: (state, action) => {   
           state.cartItems.length = 0;
        }
    }
})

export const {addItems, removeItems, clearItems} = cartSlice.actions

export default cartSlice.reducer