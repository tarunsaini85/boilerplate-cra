import React from 'react'
import { createBrowserHistory } from 'history'
import { Route, Switch} from 'react-router' // react-router v4
import { ConnectedRouter } from 'connected-react-router'
import asyncRoutes from './asyncRoutes'

const history = createBrowserHistory()
asyncRoutes.AppLoad.map(v=>v)
export const Routes = () => (
    <div className="App">
    <ConnectedRouter history={history}>
        <Switch>
            <Route exact path="/" component={asyncRoutes.Home} />
            <Route path="/about" component={asyncRoutes.About} />
            <Route path="*" component={asyncRoutes.NotFound} />
        </Switch>
    </ConnectedRouter>
    </div>
)