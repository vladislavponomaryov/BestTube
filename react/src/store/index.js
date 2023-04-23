import {configureStore} from "@reduxjs/toolkit";
import appReducer from "react/src/store/slices/app";
import videoReducer from 'react/src/store/slices/video'
import channelReducer from 'react/src/store/slices/channel'

let store = configureStore({
    reducer: {
        app: appReducer,
        video: videoReducer,
        channel: channelReducer
    },
    devTools: true
});

export default store;