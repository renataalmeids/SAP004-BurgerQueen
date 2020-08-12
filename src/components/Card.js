import React from 'react';
import Button from '../components/Button';


const Cardkitchen = (props) => {

    return (
        <div className="cardKitchen">
            <p className="mesa">Mesa: {props.pedido.mesa}</p>
            <p className="cliente">Cliente: {props.pedido.client}</p>
            <p className="pedido">Pedido: {props.pedido.pedido.map((item, index) =>
                <p key={index}>{item.name}</p>
            )}</p>
            <Button className={'btn-status'} onClick={onclick}>Pedido Pronto</Button>
        </div>
    )
};

export default Cardkitchen;
// Kitchen(props) {
//     const {client, name} = props
//     }
//     Kitche ( {pedidosState} ) {
//     }