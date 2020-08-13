import React, { useState } from 'react';
import Button from '../components/Button';



const Cardkitchen = (props) => {
    const [status, setStatus] = useState(props.pedido.status);
const handleClick = () => {
    setStatus('Pronto')
}

// const updateStatus = (doc) =>{

//     firestore.collection('client').doc(doc.id).update({
//         status:'Pronto',
//     })


    return (
        <div className="cardKitchen">
            <p className="mesa">Mesa: {props.pedido.mesa}</p>
            <p className="cliente">Cliente: {props.pedido.client}</p>
            <p className="status-pedding">Status: {status}</p>
            <p className="pedido">Pedido: {props.pedido.pedido.map((item, index) =>
                <span key={index}>{item.name} X {item.count}</span>
            )}</p>
            {/* <Button className={'btn-status'} onClick={handleClick} name='Pedido Pronto' /> */}
            <button className={'btn-status'} onClick={() =>handleClick()}>Pedido Pronto</button>
        </div>
    )
}; 

export default Cardkitchen;
