import React, { Component } from 'react';
import { isAuthenticated } from './auth';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

const PivateRoute = ({ component: Component, ...rest}) => (
    <Route {...rest} render={props =>(
        isAuthenticated() ? (
            <Component {...props} />
        ) : (
            <Redirect to={{ path:'/', state: { from: props.location } }} />
        )
    )} />
)

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/hall" />
            <PivateRoute path= "/app" />
        </Switch>
    </BrowserRouter>
);

export default Routes;