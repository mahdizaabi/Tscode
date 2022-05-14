import store from "store";
import { toggleDarkMode } from '../store/slices/dark-mode/darkMode';

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type ThemeAction = ReturnType<typeof toggleDarkMode> 
