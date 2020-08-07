import React, { useEffect, useState } from 'react';
import firebase from '../config/Config'
import Button from '../components/Button';


const Kitchen = () => {
    const logout = () => {firebase.auth().signOut();}

    const [orders, setOrders] = useState([]);
    useEffect(() => {
        firebase.firestore().collection('pedidos').onSnapshot(itemMenu=>{
            itemMenu.forEach(doc =>{(setOrders(doc.data()))})
        })
    });

    return (
        <main>
            <div>
                <Button onclick={logout} name='Sair'/>
                <h1>Kitchen</h1>
            </div>
            <div>
                <h2 className= 'order'>Pedido a ser preparado</h2>
            </div>
            <div>
                <h2 className= 'order'>Pedido pronto</h2>
            </div>
        </main>
    )
}
export default Kitchen;