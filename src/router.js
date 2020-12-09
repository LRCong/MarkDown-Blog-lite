import React from 'react'
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

import Home from './pages/Home'
import AdminRouter from './pages/AdminRouter'

export default function IRouter() {
    return <Router>
        <Switch>
            <Route path="/home" component={Home}></Route>
            <Route path="/admin" component={AdminRouter}></Route>
            <Redirect to='/home'></Redirect>
        </Switch>
    </Router>
}