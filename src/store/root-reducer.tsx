
import { combineReducers } from 'redux';
import { darkModeReducer } from './slices/dark-mode/darkMode';
import { persistReducer } from 'redux-persist';

import storage from 'redux-persist/lib/storage'
/// <reference types="redux-persist" />



const persistConfig = {
    key: 'root',
    storage
}
export const combinedReducers = combineReducers({
    'darkMode': darkModeReducer
});


export const persistedReducer = persistReducer(persistConfig, combinedReducers);
