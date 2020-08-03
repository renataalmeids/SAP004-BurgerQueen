import React from 'react';
import Routes from './routes';
import './App.css';
import PrivateRoute from "./pages/PrivateRoute";
import {
  BrowserRouter as Router,
  Switch,
  Route,
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
        <PrivateRoute exact path="/hall" component={Hall} />
        <PrivateRoute exact path="/kitchen" component={Kitchen} />
      </Switch>
    </Router>
  );
}
