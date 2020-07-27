import React from 'react';
import Form from '../components/Form';
import Button from '../components/Button';
import logo from '../burguer_queen.png';
import '../App.css';


const Login = () => {
    return (
        <main className='main'>
            <img src={logo} alt='' className='logo'></img>
            <Form />
        </main>
    );
}



export default Login;



