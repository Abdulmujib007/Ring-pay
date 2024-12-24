import { createSlice } from "@reduxjs/toolkit"; 
import AsyncStorage from "@react-native-async-storage/async-storage";
import persistReducer from "redux-persist/es/persistReducer";

const appSlice = createSlice({
  name: "appOnBoarding",
  initialState: {onBoarding:false},
  reducers: {
    setOnBoarding: (state, action) => {
      return { ...state, onBoarding: action.payload };
    },
  },
});
const persistConfig = {
  key: "app",
  storage: AsyncStorage,
};
const reducer = appSlice.reducer;

 const persists = persistReducer(persistConfig, reducer);

 export default persists
export const { setOnBoarding } = appSlice.actions;
