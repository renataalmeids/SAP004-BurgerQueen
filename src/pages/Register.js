import React from 'react';
import logo from '../burguer_queen.png';
import '../App.css';

const Register = () => {
    return (
        <main className='main'>
            <img src={logo} alt='' className='logo'></img>
            <form className='form-login'>
                <label for='name'>
                    <input type='nome' placeholder='Nome:' className='input input-nome'></input>
                </label>
                <label for='email'>
                    <input type='email' placeholder='Email:' className='input input-email'></input>
                </label>
                <label for='password'>
                    <input type='password' placeholder='Senha:' className='input input-senha'></input>
                </label>
                <label for='radio-kitchen' className='radio-btn'>
                    <input type='radio'  name='department' value='kitchen' />
                    Cozinha
                </label>
                <label for='radio-hall' className='radio-btn'>
                    <input type='radio'  name='department' value='hall' />
                    Salão
                </label>
                <button className='register-btn btn'>Registrar</button>
                <button className='back-btn btn'><a className= 'a-register' href='/'>Voltar</a></button>
            </form>
        </main>
    )
}

export default Register;