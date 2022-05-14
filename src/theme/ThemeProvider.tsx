import Context from '@mui/base/TabsUnstyled/TabsContext'
import { createTheme, ThemeProvider } from '@mui/material'
import React, { PropsWithChildren } from 'react'
import { useSelector } from 'react-redux';
import { useAppSelector } from 'store/typedHooks';
import { RootState } from 'types/Store';
import { commonColors, darkColors, lightColors } from './colors';




// export const ty = (...args:Object[]) => {
//     args.forEach(item=>console.log(item))

// }

declare module '@mui/material/styles' {

    interface Theme {
        background: string,
        font: string,
        commonColors: {
            [key: string]: string
        }
    }

    interface ThemeOptions {
        background: string,
        font: string,
        commonColors: {
            [key: string]: string
        }
    }
}


const ThemeProviderComponent = (props: PropsWithChildren<{}>) => {
    const darkModeState = useAppSelector((state) => state.darkMode)
    //const darkMode = false;
    const theme = createTheme({
        palette: {
            mode: darkModeState ? 'dark' : 'light',
            primary: {
                main: commonColors.primary
            },

        },
        background: darkModeState ? darkColors.background : lightColors.background,
        font: darkModeState ? darkColors.font : lightColors.font,
        commonColors
    })


    return (
        <ThemeProvider theme={theme}>
            {props?.children}
        </ThemeProvider>
    )
}

export default ThemeProviderComponent;