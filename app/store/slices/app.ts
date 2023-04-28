import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	isMainDrawer: true,
	isOpenDrawer: null,
}

export const appSlice = createSlice({
	name: 'app',
	initialState,
	reducers: {
		setIsMainDrawer: (state, action) => {
			state.isMainDrawer = action.payload
		},
		setIsOpenDrawer: (state, action) => {
			state.isMainDrawer = action.payload
		},
	},
})

export const { setIsMainDrawer, setIsOpenDrawer } = appSlice.actions

export default appSlice.reducer
