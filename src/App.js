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

import Home from '../src/components/Home';
import Register from  './pages/Register';
import Login from './pages/Login';
import Kitchen from './pages/Kitchen';



export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path= "/">
          <Home />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/login">
          <Login />
        </Route> 
        <Route path="/lounge">
          <Lounge />
        </Route> 
        <Route path="/request">
          <Request />
        </Route>
        <Route path="/kitchen">
          <Kitchen />
        </Route> 
      </Switch>
    </Router>
  );
}
