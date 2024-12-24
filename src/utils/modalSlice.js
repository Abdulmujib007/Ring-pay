import { createSlice } from "@reduxjs/toolkit";
// import Onboarding from "../screens/Onboarding";
import persistReducer from "redux-persist/es/persistReducer";
import AsyncStorage from "@react-native-async-storage/async-storage";

const initialState = {
  toggle1: false,
  toggle2 : false,
  // setOnBoarding:false
}

const modalSlice = createSlice({
  name: "modalVisibility",
  initialState: initialState,
  reducers: {
    toggle1(state, action) {
      return {...state,toggle1 : action.payload}
    },
  
  },
});

export const {toggle1} =   modalSlice.actions
export default modalSlice.reducer
