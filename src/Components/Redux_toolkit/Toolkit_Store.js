import { configureStore } from "@reduxjs/toolkit";
import tookit_reducer from './Redux_Slice'

export const toolkit_Store=configureStore({
    reducer:{
        redux_store:tookit_reducer
    }
})