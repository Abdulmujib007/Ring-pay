import { configureStore } from "@reduxjs/toolkit";
import modalReducer from './src/utils/modalSlice';
import singleCardPageReducer from './src/utils/singleCardPageSlice'

export const store = configureStore({
    reducer: {
        modalVisibility : modalReducer,
        cardToShow : singleCardPageReducer
    }
})
