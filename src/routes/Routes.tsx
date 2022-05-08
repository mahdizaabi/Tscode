
import { Switch, Route } from 'react-router';

import React from 'react'
import paths from './path';


const Test = () => <div> <h1>Hello world</h1> </div>
const Routes = () => {
    return (
        <Switch>
            <Route path={paths.home} exact={true} component={Test}></Route>
            {/* <Route path={paths.codeEditor} exact={true}></Route> */}
        </Switch>
    )
}


export default Routes;