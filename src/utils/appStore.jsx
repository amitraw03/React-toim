import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

const appStore= configureStore({
    //here this reducer is responsible to modfy the app store and its actually combinatn of various slice reducers
      reducer :{
        cart : cartReducer,
      },
});

export default appStore;