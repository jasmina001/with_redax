
import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  items: [
    { id: 1, name: 'Phone', price: 380, quantity: 1 },
    { id: 2, name: 'Laptop', price: 1250, quantity: 1 },
  ],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    increment: (state, action) => {
      const item = state.items.find(i => i.id === action.payload);
      if (item) item.quantity++;
    },
    decrement: (state, action) => {
      const item = state.items.find(i => i.id === action.payload);
      if (item && item.quantity > 0) item.quantity--;
    },
   
   
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { increment, decrement, addItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
