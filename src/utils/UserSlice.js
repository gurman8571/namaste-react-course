import { createSlice } from "@reduxjs/toolkit";

import { createSlice } from "@reduxjs/toolkit";


var user=  window.localStorage.getItem("user")  ;
var userInfo= user?user:null;
const UserSlice = createSlice({
    name:"User",
    initialState:
    {items:user?user:null
    
    },
    reducers:{
       login:(state,action)=>{
         console.log(action.payload)
    state.items.push(action.payload);
    window.localStorage.setItem('user',JSON.stringify(action.payload))    
       }, 
       logout:(state)=>{
        console.log('hi');
        state.items=[];
        window.localStorage.removeItem("user");
       },
       

    }



})
export const {login, logout} =UserSlice.actions;

export default UserSlice.reducer;
