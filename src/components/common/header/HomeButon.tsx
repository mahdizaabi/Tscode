import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "@mui/material"

import { styled } from "@mui/material/styles"
import paths from "routes/path";
import { useHistory } from 'react-router-dom';



const SignButtonStyled = styled(Button)(({ theme }) => ({
    color: theme.commonColors.white,
    backgroundColor: 'red'
}));



const HomeButton = () => {
    const history = useHistory();
    const onClick = () => history.push(paths.codeEditor)
    return (
        <SignButtonStyled onClick={onClick}>CODE EDITOR</SignButtonStyled>
    )
}


export default HomeButton;