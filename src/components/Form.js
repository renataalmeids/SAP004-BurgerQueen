import React from 'react';
import Input from './Input';
import Button from './Button';

const Form = () => {
    return (
        <form>
            <label htmlFor='email'>
            <Input className='input input-email' placeholder='Email:' type= 'email' />
            </label>
            <label htmlFor='password' placeholder='Senha:' >
            <Input className='input input-senha' placeholder='Senha:' type= 'password' />
            </label>
            <Button className='enter-btn btn' name= 'Entrar' />
        </form>
    );
}
export default Form;
