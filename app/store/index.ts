import { configureStore } from '@reduxjs/toolkit'

import appReducer from '@/store/slices/app'

let store = configureStore({
	reducer: {
		app: appReducer,
	},
	devTools: true,
})

export type TypeRootState = ReturnType<typeof store.getState>
