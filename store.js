import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./src/utils/modalSlice";
import singleCardPageReducer from "./src/utils/singleCardPageSlice";
// import persistReducer from "./src/utils/onBoardingSlice";
import persists from "./src/utils/onBoardingSlice";

import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";
import persistStore from "redux-persist/es/persistStore";

export const store = configureStore({
  reducer: {
    modalVisibility: modalReducer,
    cardToShow: singleCardPageReducer,
    persists,
  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE],
      },
    })
  
});

export const persistor = persistStore(store)