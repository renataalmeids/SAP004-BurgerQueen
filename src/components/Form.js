import React from 'react';
import Input from './Input';
import Button from './Button';

const Form = (props) => {
    return (
        <form className='form-login'>
            <label htmlFor='email'>
            <Input className='input input-email' placeholder='Email:' type= 'email' onChange={props.onChangeEmail} />
            </label>
            <label htmlFor='password' placeholder='Senha:' >
            <Input className='input input-senha' placeholder='Senha:' type= 'password' onChange={props.onChangePassword}/>
            </label>
            <Button onclick={props.onclick} className='enter-btn btn' name= 'Entrar' />
            <Button onclick={props.onclickRegister} className='register-btn btn' name='Registre-se' />
        </form>
    );
}
export default Form;
