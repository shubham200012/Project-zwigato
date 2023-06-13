import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems: [],
    totalQuantity: 0,
    totalAmount: 0
}

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialState,

    reducers: {

        // -------- Add Item -------------------
        
        addItem(state, action){
            const newItem = action.payload
            const existingItem = state.cartItems.find(item=> item.productid === newItem.productid)
            state.totalQuantity++

            if(!existingItem){
                state.cartItems.push({
                    productid: newItem.productid,
                    title: newItem.title,
                    image01: newItem.image01,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price
                })
            }
            else{
                existingItem.quantity++
                existingItem.totalPrice = Number(existingItem.totalPrice) + Number(newItem.price)
            }

            state.totalAmount = state.cartItems.reduce((total, item) =>(
                total + Number(item.price) * Number(item.quantity)
            ),0)
        },

        // ----- Remove Item---------

        removeItem(state, action) {
            const productid = action.payload;
            const existingItem = state.cartItems.find((item) => item.productid === productid);
            state.totalQuantity--;
      
            if (existingItem.quantity === 1) {
              state.cartItems = state.cartItems.filter((item) => item.productid !== productid);
            } else {
              existingItem.quantity--;
              existingItem.totalPrice =
                Number(existingItem.totalPrice) - Number(existingItem.price);
            }
      
            state.totalAmount = state.cartItems.reduce(
              (total, item) => total + Number(item.price) * Number(item.quantity),
              0
            );
        },

        // -------- Delete Item ------------

        deleteItem(state, action) {
            const productid = action.payload;
            const existingItem = state.cartItems.find((item) => item.productid === productid);
      
            if (existingItem) {
              state.cartItems = state.cartItems.filter((item) => item.productid !== productid);
              state.totalQuantity = state.totalQuantity - existingItem.quantity;
            }
      
            state.totalAmount = state.cartItems.reduce(
              (total, item) => total + Number(item.price) * Number(item.quantity),
              0
            );
        }
    }
})

export const cartActions = cartSlice.actions
export default cartSlice