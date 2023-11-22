import { configureStore } from "@reduxjs/toolkit";
import HomeSlice from "../Slice/HomeSlice";


const store=configureStore({
    reducer:{
       home:HomeSlice
    }
})

export default  store;