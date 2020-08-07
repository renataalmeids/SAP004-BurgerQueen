import React from 'react';

const Input = (props) => {
    return (
        <input type= {props.type} className = {props.className} 
        placeholder = {props.placeholder} onChange={props.onChange} 
        name={props.name} value={props.value} />
    );
}

export default Input;


