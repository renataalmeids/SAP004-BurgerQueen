import React, { useState, useEffect } from 'react';
import logo from '../burguer_queen.png';
import Button from '../components/Button';
import firebase from '../config/Config';

const Kitchen = () => {
    const [doing, setDoing] = useState([]);
    const [done, setDone] = useState([]);
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        firebase.firestore()
            .collection('pedidos')
            .get()
            .then(snapshot => snapshot.forEach(doc => {
                console.log(orders)
                setOrders([...orders, doc.data()])
                console.log(doc.data())
            }))
            .catch()
    }, [])



    return (
        <main className='main'>
            <img src={logo} alt='' className='logo'></img>
            <h1>Cozinha</h1>
            <Button className='doing-btn' name='Pedidos a serem feitos' />
            <Button className='done-btn' name='Pedidos para entrega' />
        </main>
    );
}
export default Kitchen;