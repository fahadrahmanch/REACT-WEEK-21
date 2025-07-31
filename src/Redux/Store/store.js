import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../slices/counterSlice";

const Store=configureStore({
    reducer:{
        counter:counterSlice,
    }
})
export default Store