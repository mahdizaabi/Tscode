import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { combinedReducers } from './root-reducer'
import { persistedReducer } from './root-reducer';

import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE, persistStore } from "redux-persist";
const store = configureStore({
    reducer: combinedReducers,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: getDefaultMiddleware({
        serializableCheck: {
            /* ignore persistance actions */
            ignoredActions: [
                FLUSH,
                REHYDRATE,
                PAUSE,
                PERSIST,
                PURGE,
                REGISTER 
            ],
        },
    }),

})

export const persistor = persistStore(store);

export default store