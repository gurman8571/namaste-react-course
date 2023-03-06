import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
    name:"Cart",
    initialState:{
        items:[],
    },
    reducers:{
       addItem:(state,action)=>{
        if (state.items.length == 0) {
            state.items.push(action.payload);
        }
        else{
            const found = state.items.findIndex(element => action.payload.id == element.id );
              //console.log(found);
            if (found>=0) {
                state.items[found].quantity++;
            } else {
                state.items.push(action.payload);
            }
        }
            
       }, 
       clearCart:(state)=>{
       state.items=[];
       },
       removeItem:(state,action)=>{
        const found =state.items.find(element => action.payload == element.id );
        const index = state.items.findIndex(element => action.payload == element.id );
          
        if (found.quantity>1) {
            state.items[index].quantity--; 
        }
        else{
            const result = state.items.filter(item => item.id != action.payload);
            state.items=result;

        }
        
       },

    }



})
export const {addItem, clearCart,removeItem} =CartSlice.actions;

export default CartSlice.reducer;
