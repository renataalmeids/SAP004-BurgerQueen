// import React from 'react';
import React, { useCallback } from "react";
// import { withRouter } from "react-router";
import firebase from '../config/Config';
import logo from '../burguer_queen.png';
import '../App.css';
import Button from '../componentes/Button';
import 'firebase/firestore'

const SignUp = ({history}) => {
    const handleSignUp = useCallback(async event => {
        event.preventDefault();
        const { nome, department, email, password } = event.target.elements;
    try {
        await firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
        alert('login criado com sucesso');
        let database = firebase.firestore()
        console.log(database)
        await database.collection('department').add({
            nome: nome.value,
            email: email.value,
            departamento: department.value
        })
        history.push(`/${department}`);
    } catch (error) {
        console.log(error)
        alert(error);
    }
    }, 
    [history]
    );

    // const Register = () => {
        return (
            <main className='main'>
                <img src={logo} alt='' className='logo'></img>
                <form className='form-register'  onSubmit={handleSignUp}>
                    <label htmlfor='name'>
                        <input name='nome' type='nome' placeholder='Nome:' className='input input-nome'></input>
                    </label>
                    <label htmlfor='email'>
                        <input name='email' type='email' placeholder='Email:' className='input input-email'></input>
                    </label>
                    <label htmlfor='password'>
                        <input name='password' type='password' placeholder='Senha:' className='input input-senha'></input>
                    </label>
                    <label htmlfor='radio-kitchen' className='radio-btn'>
                        <input type='radio'  name='department' value='kitchen' />
                        Cozinha
                    </label>
                    <label htmlfor='radio-hall' className='radio-btn'>
                        <input type='radio'  name='department' value='hall' />
                        Salão
                    </label>
                    <Button className='register-btn btn' name='Registrar'/>
                </form>
                <a className= 'a-register' href='/'><button className='back-btn btn'>Voltar</button></a>
            </main>
        )
    // };

};

    export default SignUp;