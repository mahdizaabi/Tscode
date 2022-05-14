
import { combineReducers } from 'redux';
import { darkModeReducer } from './slices/dark-mode/darkMode';


export const combinedReducers = combineReducers({
    'darkMode': darkModeReducer
});

