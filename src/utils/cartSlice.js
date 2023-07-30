import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};
const cartSlice = createSlice({
  name: "Cart",
  initialState,
  reducers: {
    addItems: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      const itemIdToRemove = action.payload.card.info.imageId;
      state.items = state.items.filter(
        (item) => item.card.info.imageId !== itemIdToRemove
      );
    },
    clearCart: (state, action) => {
      state.items = [];
    },
  },
});

export const { addItems, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;

//dummy
{
  /**********
cartSlice = {
    action:{
        addItem,removeItem,clearCart
    },
    reducer: reducers
}
*/
}
