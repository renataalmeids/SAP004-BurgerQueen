import React, { useState } from 'react';
import firebase from '../config/Config';
import Button from '../components/Button';



const Cardkitchen = (props) => {
    const [status, setStatus] = useState(props.pedido.status);
    const handleClick = (pedido) => {
        firebase.firestore().collection('pedidos').doc(pedido.id).update({
            status: 'Pronto',
        })
        setStatus('Pronto')
    }


    return (
        <div className="cardKitchen">
            <p className="mesa">Mesa: {props.pedido.mesa}</p>
            <p className="cliente">Cliente: {props.pedido.client}</p>
            <p className="status-pedding">Status: {status}</p>
            <p className="pedido">Pedido: {props.pedido.pedido.map((item, index) =>
                <span key={index}>{item.name} X {item.count}</span>
            )}</p>
            <button className={'btn-status'} onClick={() => handleClick(props.pedido)}>Pedido Pronto</button>
        </div>
    )
};

export default Cardkitchen;
