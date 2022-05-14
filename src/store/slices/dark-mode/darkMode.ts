import { createSlice } from "@reduxjs/toolkit";

const initialState = false;

const darkModeSlice = createSlice({
    initialState,
    name: 'darkMode',
    reducers: {
        toggleDarkMode(state: boolean) {
            return !state;
        }
    },
})

//toggle dark mode is an action creator that produce an action when invoked;
export const { toggleDarkMode } = darkModeSlice.actions;

export const darkModeReducer = darkModeSlice.reducer;

