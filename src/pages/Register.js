import React from 'react';
import logo from '../burguer_queen.png';
import '../App.css';
import 'firebase/firebase-auth'

// function createUser(name, email, password) {
//         firebase.auth().createUserWithEmailAndPassword(email, password)
//         .then((data) => {
//             const users = firebase.firestore().collection("users");
//             users.doc(data.user.uid).set({
//             id_user: data.user.uid,
//             email: email,
//             displayName: name,
//             });
//             // let user = firebase.auth().currentUser;
//             // user.updateProfile({
//             //     displayName: name,
//             // })
//             // .then(function () {})
//             // .catch(function (error) {});
//             // alert("Conta criada com sucesso");
//         })
//         .catch(function (error) {
//             var errorCode = error.code;
//             var errorMessege = error.message;
//             alert(errorCode);
//         });
// }
const name = document.getElementsByClassName('input-name');
const email = document.getElementsByClassName('input-email');
const password = document.getElementsByClassName('input-password')

const Register = () => {
    return (
        <main className='main'>
            <img src={logo} alt='' className='logo'></img>
            <form className='form-login'>
                <label for='name'>
                    <input type='nome' placeholder='Nome:' className='input input-name'></input>
                </label>
                <label for='email'>
                    <input type='email' placeholder='Email:' className='input input-email'></input>
                </label>
                <label for='password'>
                    <input type='password' placeholder='Senha:' className='input input-password'></input>
                </label>
                <label for='radio-kitchen' className='radio-btn'>
                    <input type='radio'  name='department' value='kitchen' />
                    Cozinha
                </label>
                <label for='radio-hall' className='radio-btn'>
                    <input type='radio'  name='department' value='hall' />
                    Salão
                </label>
                <button className='register-btn btn' >Registrar</button>
                <button className='back-btn btn'><a className= 'a-register' href='/'>Voltar</a></button>
            </form>
        </main>
    )
}

export default Register;