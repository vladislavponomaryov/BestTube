import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    openDrawer: null
}

export const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        isOpenDrawer: (state,action) => {
            return {
                ...state,
                openDrawer: action.payload
            }
        }
    }
})

export const {isOpenDrawer} = appSlice.actions

export default appSlice.reducer