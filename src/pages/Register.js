import React, { useCallback } from "react";
import firebase from '../config/Config';
import logo from '../burguer_queen.png';
import '../App.css';
import 'firebase/firestore';
import Button from '../components/Button';
import Input from '../components/Input';
import authErrors from "./authErrors";


const SignUp = ({history}) => {
    const handleSignUp = useCallback(async event => {
        event.preventDefault();
        const { nome, department, email, password } = event.target.elements;
    try {
        await firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
        alert('login criado com sucesso');
        const uid = firebase.auth().currentUser.uid
        let database = firebase.firestore()
        await database.collection('department').add({
            uid: uid,
            nome: nome.value,
            email: email.value,
            departamento: department.value
        });
        history.push(`/${department.value}`);
    } catch (error) {
        let errorMsg = error.code
        if (authErrors[errorMsg]) {
            alert(authErrors[errorMsg])
        } else {
            alert(errorMsg)
        }
    }
    }, 
    [history]
    );

    const renderBack = () => {
        history.push('/')
    }

    return (
        <main className='main'>
            <img src={logo} alt='' className='logo'></img>
            <form className='form-register' onSubmit={handleSignUp}>
                <label htmlFor='name'>
                    <Input name='nome' type='nome' placeholder='Nome:' className='input input-nome' />
                </label>
                <label htmlFor='email'>
                    <Input name='email' type='email' placeholder='Email:' className='input input-emai'/>
                </label>
                <label htmlFor='password'>
                    <Input name='password' type='password' placeholder='Senha:' className='input input-senha'/>
                </label>
                <label htmlFor='radio-kitchen' className='radio-btn'>
                    <Input name='department' type='radio' value='kitchen'/>
                    Cozinha
                </label>
                <label htmlFor='radio-hall' className='radio-btn'>
                    <Input name='department' type='radio' value='hall'/>
                    Salão
                </label>
                <Button className='register-btn btn' name='Registrar'/>
                <Button className='back-btn btn' name='Voltar' onclick={()=>renderBack()}/>
            </form>
        </main>
    )

};

    export default SignUp;