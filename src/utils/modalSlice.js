import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  toggle1: false,
  toggle2 : false
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
