import React from 'react';

const form = (props) => {
    return(
        <form className={props.className}>
            <label>
                <input type='email' placeholder='Email:' className='input input-nome'></input>
            </label>
            <label>
                <input type='password' placeholder='Senha:' className='input input-senha'></input>
            </label>
            <button className='enter-btn'>Entrar</button>
        </form>
    )
}

export default form;