import { createSlice } from "@reduxjs/toolkit";

const singleCardPageSlice = createSlice({
    name:'cardToBeShown',
    initialState:{},
    reducers :{
        cardToShow(state,action){
            return action.payload
        }
    }
})

export const {cardToShow} = singleCardPageSlice.actions
export default singleCardPageSlice.reducer 