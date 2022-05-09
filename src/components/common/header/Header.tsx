import { AppBar, Toolbar, Typography } from '@mui/material'
import React from 'react'

import { styled } from "@mui/material/styles"
import { Link } from 'react-router-dom'
import paths from 'routes/path'
import HomeButton from './HomeButon'
import { useAuth0 } from '@auth0/auth0-react'
import SigninButton from './SignInButton'
import SignOutButton from './SIgnOutButton'


const StyledLink = styled(Link)(({ theme }) => ({
    textDecoration: 'none',
    color: theme.commonColors.white
}))

const Header = () => {
    const { isAuthenticated } = useAuth0();
    return (
        <AppBar >
            <Toolbar>
                <Typography variant="h6" sx={{ flex: 1 }}>
                    <StyledLink to={paths.home}> Code editor App</StyledLink>
                </Typography>
                {isAuthenticated ? <AuthenticatedButtons /> : <UnauthenticatedButtons />}
            </Toolbar>
        </AppBar >
    )

}

const UnauthenticatedButtons = () => {
    return (
        <div>
            <SigninButton></SigninButton>
        </div>
    )
}

const AuthenticatedButtons = () => {
    return (
        <div>
            <SignOutButton></SignOutButton>
            <HomeButton></HomeButton>
        </div>
    )
}

export default Header