import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	mainDrawer: true,
	openDrawer: null
}

export const appSlice = createSlice({
	name: 'app',
	initialState,
	reducers: {
		setMainDrawer: (state, action) => {
			return {
				...state,
				mainDrawer: action.payload
			}
		},
		toggleDrawer: (state, action) => {
			return {
				...state,
				openDrawer: action.payload
			}
		}
	}
})

export const { toggleDrawer, setMainDrawer } = appSlice.actions

export default appSlice.reducer
