import { createSlice } from "@reduxjs/toolkit";
const initialState = {
   customersBag: [],
   savedProducts: [],
};
const cartSlice = createSlice({
   name: "cart",
   initialState,
   reducers: {
      ADD_TO_BAG: (state, action) => {
         const product = state.customersBag.find(
            (item) => item.id === action.payload.item.id
         );
         if (!product) {
            state.customersBag = [
               ...state.customersBag,
               {
                  ...action.payload.item,
                  qty: action.payload.qty,
                  size: action.payload.size,
               },
            ];
         } else return;
      },
      REMOVE_FROM_BAG: (state, action) => {
         state.customersBag = state.customersBag.filter(
            (item) => item.id !== action.payload
         );
         state.savedProducts = state.savedProducts.filter(
            (item) => item.id !== action.payload
         );
      },
      SAVE_FOR_LATER: (state, action) => {
         state.savedProducts = [...state.savedProducts, action.payload];
         state.customersBag = state.customersBag.filter(
            (item) => item.id !== action.payload.id
         );
      },
      MOVE_TO_BAG: (state, action) => {
         state.savedProducts = state.savedProducts.filter(
            (item) => item.id !== action.payload.id
         );
         state.customersBag = [...state.customersBag, action.payload];
      },
      ADD_QUANTITY: (state, action) => {
         const product = state.customersBag.find(
            (item) => item.id === action.payload.id
         );
         product.qty = action.payload.qty;
      },
   },
});

export const {
   ADD_TO_BAG,
   REMOVE_FROM_BAG,
   SAVE_FOR_LATER,
   MOVE_TO_BAG,
   ADD_QUANTITY,
} = cartSlice.actions;
export default cartSlice.reducer;
