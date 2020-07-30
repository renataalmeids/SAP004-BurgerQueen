
import React, {useState} from 'react';
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
            console.log(email, password)
            firebase
                .auth()
                .signInWithEmailAndPassword(email, password)
                .then()
                .catch()
        };
    
        return (
            <main className='main'>
                <img src={logo} alt='' className='logo'></img>
                <Form 
                    onChangeEmail={(event) => setEmail(event.target.value)} 
                    onChangePassword={(event) => setPassword(event.target.value)}
                    onclick= {loginUser}
                />
                <a href='/register'> <Button className='btn-register btn' name='Cadastre-se'/></a>
                </main>
        );
    }



    export default Login;
