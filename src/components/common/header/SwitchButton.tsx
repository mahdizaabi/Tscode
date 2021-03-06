import { Switch } from '@mui/material'
import React from 'react'
import { toggleDarkMode } from 'store/slices/dark-mode/darkMode';
import { useAppDispatch, useAppSelector } from 'store/typedHooks'
import DarkModeIcon from '@mui/icons-material/Brightness2'
const SwitchButton = () => {
    const isDarkEnabled = useAppSelector(state => state.darkMode);
    const dispatch = useAppDispatch();
    const onThemeChange = () => dispatch(toggleDarkMode())
    return (
        <>
        <DarkModeIcon />
            <Switch
                color="default"
                checked={isDarkEnabled}
                onChange={onThemeChange} />
        </>
    )
}

export default SwitchButton