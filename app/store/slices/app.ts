import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	isMainDrawer: true,
	isOpenDrawer: null,
	isOpenMobileSearch: false,
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
		setIsOpenMobileSearch: (state, action) => {
			state.isOpenMobileSearch = action.payload
		},
	},
})

export const { setIsMainDrawer, setIsOpenDrawer, setIsOpenMobileSearch } = appSlice.actions

export default appSlice.reducer
