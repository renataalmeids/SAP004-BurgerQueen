import React, { useState } from 'react';
import Form from '../components/Form';
import logo from '../burguer_queen.png';
import '../App.scss';
import authErrors from '../pages/authErrors';
import firebase from '../config/Config';
import { useHistory } from 'react-router-dom';

const Login = () => {
    const renderRegister = () =>{
        history.push('/Register')
    }
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [errorMsg, setErrorMsg] = useState();

    const history = useHistory();
    function loginUser(e) {
        e.preventDefault()
        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
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
            <div className='container'>
                <img src={logo} alt='' className='logo'></img>
                <Form
                    onChangeEmail={(event) => setEmail(event.target.value)}
                    onChangePassword={(event) => setPassword(event.target.value)}
                    onChangeErrorMsg={(event) => setErrorMsg(event.target.value)}
                    onclick={loginUser}
                    onclickRegister={()=>renderRegister()}
                />
                <div>
                    {errorMsg}
                </div>
            </div>
        </main>
    );
}

export default Login;
