import { configureStore } from '@reduxjs/toolkit'
import appReducer from 'store/slices/app'
import channelReducer from 'store/slices/channel'
import videoReducer from 'store/slices/video'

let store = configureStore({
	reducer: {
		app: appReducer,
		video: videoReducer,
		channel: channelReducer
	},
	devTools: true
})

export default store
