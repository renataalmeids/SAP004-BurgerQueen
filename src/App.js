import React from 'react';
import logo from './logo.svg';
import './App.css';
import firebase from './Config';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from '../src/components/Home'


export default function App() {
  return (
    <Router>
      <Switch>
        {/* <Route path="/about">
          <About />
        </Route>
        <Route path="/users">
          <Users />
        </Route> */}
        <Route exact path= "/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}
