import {configureStore} from "@reduxjs/toolkit";
import appReducer from "./slices/app";
import videoReducer from './slices/video'

let store = configureStore({
    reducer: {
        app: appReducer,
        video: videoReducer
    },
    devTools: true
});

export default store;