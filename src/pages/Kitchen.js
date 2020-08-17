import React, { useEffect, useState } from 'react';
import firebase from '../config/Config';
import Button from '../components/Button';
import Card from '../components/Card';
import './Kitchen.scss';



const Kitchen = () => {
    const logout = () => { firebase.auth().signOut(); }
    const [orders, setOrders] = useState([]);


    useEffect(() => {
        const pedding = []
        firebase.firestore().collection('pedidos')
            .onSnapshot((querySnapshot) => {
                querySnapshot.forEach(doc => {
                    pedding.push({
                        id: doc.id,
                        ...doc.data()
                    })
                })
                setOrders(pedding)
            })
    }, [])

    return (
        <main className='main-kitchen'>
            <nav className='nav-'>
                <Button onclick={logout} className='btn-sair-kitchen' name='Sair' />
                <hr></hr>
            </nav>
            <h1 className='title-kitchen-order'>Pedidos em Preparo</h1>
            <div className="lista-de-pedidos">
                {orders.map((item, index) =>
                    <Card key={index} pedido={item} pedidosState={orders} />
                )}
            </div>
        </main>
    )
}
export default Kitchen;