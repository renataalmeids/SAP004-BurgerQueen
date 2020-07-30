import React from 'react';
import './App.css';
// import firebase from './config/Config';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Register from  './pages/Register';
import Login from './pages/Login';
import Kitchen from './pages/Kitchen';
import Hall from './pages/Hall';


export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path= "/">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/hall">
          <Hall />
        </Route> 
        <Route path="/kitchen">
          <Kitchen />
        </Route> 
      </Switch>
    </Router>
  );
}
