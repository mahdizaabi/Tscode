
import { withAuthenticationRequired } from '@auth0/auth0-react'
import Loading from 'components/common/loading/Loading'
import React, { ComponentType } from 'react'
import { Route } from 'react-router-dom'



export type ProtectedRouteProps = {
    component: ComponentType,
    [key: string]: any
}

const ProtectedRoute = ({ component, ...args }: ProtectedRouteProps) => {
    return (

        <Route {...args} component={withAuthenticationRequired(component, {
                onRedirecting: () => <Loading />
            })}
        >
            
        </Route>
    )
}



export default ProtectedRoute;