import React from 'react';

const ButtonHall = (props) => {
    return (
    <button className = {props.className} id={props.id} onClick= {props.onclick} onChange={props.onChange} >
        {props.name} R${props.price},00
        </button>
    );
}

export default ButtonHall;