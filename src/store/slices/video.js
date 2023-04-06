import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    status: null
}

const videoSlice = createSlice({
    name: 'video',
    initialState,
    reducers: {
        justTestAction(state,action){
            //
        },
        oneMoreTestAction(state,action){
            //
        }
    }
})

export const {justTestAction, oneMoreTestAction} = videoSlice.actions

export default videoSlice.reducer