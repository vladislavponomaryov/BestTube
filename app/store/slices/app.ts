import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	isMainDrawer: true,
	isOpenDrawer: null,
}

const appSlice = createSlice({
	name: 'app',
	initialState,
	reducers: {
		setIsMainDrawer: (state, action) => {
			state.isMainDrawer = action.payload
		},
		setIsOpenDrawer: (state, action) => {
			state.isOpenDrawer = action.payload
		},
	},
})

export const { setIsMainDrawer, setIsOpenDrawer } = appSlice.actions

export default appSlice.reducer
