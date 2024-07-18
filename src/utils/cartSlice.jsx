import { createSlice } from "@reduxjs/toolkit";
import e from "cors";

const cartSlice = createSlice({
     name:"cart",
     initialState:{
        items :[]
     },
     reducers :{
        // reducer functn corresponding to the action 'addItem'
        addItem: (state,action) =>{
            //mutating the state here
           state.items.push(action.payload);
        },
        removeItem :(state) =>{
            state.items.pop();
        },
        clearCart :(state) =>{
            state.items.length=0;
        }
     }
});
//exporting actions and reducers

export const{addItem , removeItem , clearCart} = cartSlice.actions;

export default cartSlice.reducer;