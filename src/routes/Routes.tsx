
import { Switch, Route } from 'react-router';

import React from 'react'
import paths from './path';
import ProtectedRoute from 'auth/ProtectedRoute';
import CodeEditor from 'pages/code-editor/CodeEditor';
import { useAuth0 } from '@auth0/auth0-react';
import Loading from 'components/common/loading/Loading';

const Home = React.lazy(() => import('pages/home/Home'))

const Routes = () => {
    const { isLoading } = useAuth0();

    if (isLoading) {
        return (
            <Loading />
        )
    }

    return (

        <Switch>
            <Route path={paths.home} exact={true} component={Home}></Route>
            <ProtectedRoute component={CodeEditor} exact path={paths.codeEditor}></ProtectedRoute>
        </Switch>
    )
}

export default Routes;