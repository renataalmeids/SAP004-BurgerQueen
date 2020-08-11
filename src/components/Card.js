import React from 'react';

const Cardkitchen = (props) => {

    return (
        <div className="cardKitchen">
            <p className="mesa">Mesa: {props.pedido.mesa}</p>
            <p className="cliente">Cliente: {props.pedido.client}</p>
            <p className="pedido">Pedido: {props.pedido.pedido.map((item, index) =>
                <p key={index}>{item.name}</p>
            )}</p>
            {/* <button className={'btn-status'} onClick={handleClick}>Pedido Pronto</button> */}
        </div>
    )
};

export default Cardkitchen;
// Kitchen(props) {
//     const {client, name} = props
//     }
//     Kitche ( {pedidosState} ) {
//     }