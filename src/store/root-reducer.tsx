
import { combineReducers } from '@reduxjs/toolkit';
import { darkModeReducer } from './slices/dark-mode/darkMode';


export const combinedReducers = combineReducers(combineReducers({ darkModeReducer }))

