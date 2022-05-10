import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "@mui/material"

import { styled } from "@mui/material/styles"
import paths from "routes/path";

const SignButtonStyled = styled(Button)(({ theme }) => ({
    color: theme.commonColors.white,
    backgroundColor: 'red'
}));

const SigninButton = () => {
    const { loginWithRedirect } = useAuth0();

    const onSignIn = () => {
        loginWithRedirect({
            appState: { returnTo: paths.codeEditor }
        })
    }
    return (
        <>
            <SignButtonStyled onClick={onSignIn}>Sign In</SignButtonStyled>
        </>
    )
}

export default SigninButton