import React from 'react';

const Button = (props) => {
    return (
    <button className = {props.className} onClick= {props.onclick}>{props.name} </button>
    );
}


export default Button;


