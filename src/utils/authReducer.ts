import AsyncStorage from "@react-native-async-storage/async-storage";
import { createSlice } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";

export interface User {
  id: Number;
  userName?: string;
  firstNamer: string;
  lastName: string;
  email: string;
  gender?: string;
  phoneNumber: string;
}

interface InitState {
  user: User | null;
  accessToken: string | null;
  refreshToken: string | null;
}

const initialState: InitState = {
  user: null,
  accessToken: null,
  refreshToken: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      const { accessToken, refreshToken, ...otherFields } = action.payload;
      return { ...state, user: otherFields, accessToken,refreshToken};
    },
    logout : (state) => {
        return initialState
    },
    signUp : (state,action) => {
        const {accessToken,refreshToken,otherFields} = action.payload
        return {...state,accessToken,refreshToken,user:otherFields}
    } 
  },
});

export const {login,logout,signUp} = authSlice.actions
const persistConfig = {
    key:'auth',
    storage:AsyncStorage,
}
const reducer = authSlice.reducer
const persistAuthReducer = persistReducer(persistConfig,reducer)
export default persistAuthReducer