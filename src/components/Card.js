import React, { useState } from 'react';
import firebase from '../config/Config';

const Cardkitchen = (props) => {
    const [status, setStatus] = useState(props.pedido.status);
    const handleClick = (pedido) => {
            firebase.firestore().collection('pedidos').orderBy('date', 'asc').doc(pedido.id).update({
            status: 'Pronto',
        })
        setStatus('Pronto');
    }


    return (
        <div className="cardKitchen">
            <p className="date">Data: {props.pedido.date}</p>
            <p className="mesa">Mesa: {props.pedido.mesa}</p>
            <p className="cliente">Cliente: {props.pedido.client}</p>
            <p className="status-pedding">Status: {status}</p>
            <div className="pedido">Pedido: {props.pedido.pedido.map((item, index) =>
                <p key={index}>{item.name} X {item.count}</p>
            )}</div>
            <button className={'btn-status'} onClick={() => handleClick(props.pedido)}>Pedido Pronto</button>
        </div>
    )
};

export default Cardkitchen;
