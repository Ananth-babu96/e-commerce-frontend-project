import { configureStore } from "@reduxjs/toolkit";
import reviewReducer from "./userReviewsReducer.js";
import cartReducer from "../cartReducer.js";
export const Store = configureStore({
   reducer: {
      reviews: reviewReducer,
      cart: cartReducer,
   },
});
