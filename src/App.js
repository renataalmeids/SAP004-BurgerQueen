import React, {useState, useEffect} from 'react';
import firebase from './config/Config';
import './App.scss';
import PrivateRoute from "./pages/PrivateRoute";
import {
  BrowserRouter as Router,
  Route, Redirect
} from "react-router-dom";
import Register from  './pages/Register';
import Login from './pages/Login';
import Kitchen from './pages/Kitchen';
import Hall from './pages/Hall';
import AuthProvider from './pages/Auth'

export default function App() {

  const [user, setUser] = useState();
  useEffect(()=>{
    firebase.auth()
    .onAuthStateChanged(user =>{
      user ? firebase.firestore().collection('department').where('uid', '==', user.uid).onSnapshot((querySnapshot)=>{
        querySnapshot.forEach(doc => {
          setUser(doc.data())
        });
      })
      : setUser();
    })

  },[])

  return (
    <AuthProvider>
      <Router>
        {user ? <Redirect to={user.departamento} /> : <Redirect to={'/'} />} 
        <React.Fragment>
          <PrivateRoute exact path="/hall" component={Hall} />
          <PrivateRoute exact path="/kitchen" component={Kitchen} />
          <Route exact path= "/" component={Login}/>
          <Route path="/register" component={Register}/>
        </React.Fragment>
      </Router>
    </AuthProvider>

  );
}
