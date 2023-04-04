import {combineReducers} from "@reduxjs/toolkit";
import app from "./app";

let reducers = combineReducers({
    app: app
});

export default reducers