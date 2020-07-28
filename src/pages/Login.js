import React from 'react';
import logo from '../burguer_queen.png';
import '../App.css';
const Login = () => {
    return (
        <main className='main'>
            <img src={logo} alt='' className='logo'></img>
            <form className='form-login'>
                <label htmlfor='email'>
                    <input type='email' placeholder='Email:' className='input input-email'></input>
                </label>
                <label htmlfor='password'>
                    <input type='password' placeholder='Senha:' className='input input-senha'></input>
                </label>
                <button className='enter-btn btn'>Entrar</button>
                <p className='p-login'>Ainda não tem uma conta?<a classNmae='a-login' href='/Register'>Cadastre-se</a></p>
            </form>
        </main>
    );
}
export default Login;