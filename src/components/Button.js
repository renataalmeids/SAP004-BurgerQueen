import React from 'react';

const Button = (props) => {
    return (
        <button
            className={props.className}
            id={props.id}
            onClick={props.onclick}
            onChange={props.onChange}
        >
            {props.name}
        </button>
    );
}

export default Button;