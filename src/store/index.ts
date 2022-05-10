import { configureStore } from "@reduxjs/toolkit";
import { combinedReducers } from './root-reducer'

const store = configureStore({
    reducer: combinedReducers,
    devTools: process.env.NODE_ENV !== 'production'
})


export default store