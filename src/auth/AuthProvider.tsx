import { AppState, Auth0Provider } from "@auth0/auth0-react"
import { PropsWithChildren } from "react"
import envV from "config/index"
import { useHistory } from 'react-router-dom';

export interface AuthProps {
    name: string,
    password: string
}


const AuthProvider = ({ children, ...rest }: PropsWithChildren<{}>) => {
    const history = useHistory();
    const onRedirectCallback = (appState: AppState | undefined) => {
        history.push(appState?.returnTo || window.location.pathname)
    };
    return (
        <Auth0Provider
            domain={envV.auth0Domain}
            clientId={envV.auth0ClientId}
            redirectUri={window.location.origin}
            onRedirectCallback={onRedirectCallback}
        >
            {children}
        </Auth0Provider>
    )
}

export default AuthProvider