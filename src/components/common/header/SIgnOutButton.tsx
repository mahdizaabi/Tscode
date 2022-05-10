import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "@mui/material"

import { styled } from "@mui/material/styles"
import paths from "routes/path";

const SignoutStyledButton = styled(Button)(({ theme }) => ({
    color: theme.commonColors.white,
    backgroundColor: 'red'
}));




const SignOutButton = () => {
    const { logout } = useAuth0();
    const onSignOut = () => {
        logout({
            returnTo: window.location.origin
        })
    }

    return (
        <>
            <SignoutStyledButton onClick={onSignOut}>Sign Out</SignoutStyledButton>
        </>
    )
}

export default SignOutButton