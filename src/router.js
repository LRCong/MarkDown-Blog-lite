import React from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'

import Home from './pages/Home'
import AdminRouter from './pages/AdminRouter'

export default function IRouter() {
    return <Router>
        <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route path="/admin" component={AdminRouter}></Route>
        </Switch>
    </Router>
}