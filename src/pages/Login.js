import React, { useState } from 'react';
import Form from '../components/Form';
import logo from '../burguer_queen.png';
import '../App.css';
import authErrors from '../pages/authErrors';
import firebase from '../config/Config';
import Button from '../componentes/Button';

const Login = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [errorMsg, setErrorMsg] = useState();
  
    function loginUser(e) {
        e.preventDefault()
        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then()
            .catch(function (error) {
                let errorMsg = error.code
                if (authErrors[errorMsg]) {
                    setErrorMsg(authErrors[errorMsg])
                } else {
                    setErrorMsg(errorMsg)
                }
            });
    }

    return (
        <main className='main'>
            <img src={logo} alt='' className='logo'></img>
            <Form
                onChangeEmail={(event) => setEmail(event.target.value)}
                onChangePassword={(event) => setPassword(event.target.value)}
                onChangeErrorMsg={(event) => setErrorMsg(event.target.value)}
                onclick={loginUser}
            />
            <a className= 'a-register' href='/Register'><button className='back-btn btn'>Registre-se</button></a>
            <div>
                {errorMsg}
            </div>

        </main>
    );
}



export default Login;
