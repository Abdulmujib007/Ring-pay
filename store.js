import { configureStore } from "@reduxjs/toolkit";
import modalReducer from './src/utils/modalSlice'

export const store = configureStore({
    reducer: {
        modalVisibility : modalReducer
    }
})