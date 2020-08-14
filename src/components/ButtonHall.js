import React from 'react';

const ButtonHall = (props) => {
    return (
    <button className={props.className} id={props.id} onClick={props.onclick} onChange={props.onChange} >
        {props.name} {props.price}
        </button>
    );
}

export default ButtonHall;