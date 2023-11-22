import { createSlice } from "@reduxjs/toolkit";
export const HomeSlice=createSlice({
    name:"home",
    initialState:{data:[]},
    reducer:{
       
    }
})

export const{home,Add}=HomeSlice.actions
export default  HomeSlice.reducer