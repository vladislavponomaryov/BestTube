import {configureStore} from "@reduxjs/toolkit";
import appReducer from "./slices/app";
import videoReducer from './slices/video'
import channelReducer from './slices/channel'

let store = configureStore({
    reducer: {
        app: appReducer,
        video: videoReducer,
        channel: channelReducer
    },
    devTools: true
});

export default store;