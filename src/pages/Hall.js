import React, { useState } from 'react';
import firebase from '../config/Config'
import ButtonHall from '../components/ButtonHall'
import Button from '../components/Button';

const Hall = () => {
    const logout = () => {firebase.auth().signOut();}
    const renderAllDay = () =>{
        firebase.firestore().collection('menu-p-dia').onSnapshot(itemMenu=>{
            itemMenu.forEach(doc =>{(setListMenuAllDay(doc.data()))})
        })
    };
    const renderBreakfast = () =>{
        firebase.firestore().collection('menu-manhã').onSnapshot(itemMenu=>{
            itemMenu.forEach(doc =>{(setListMenuBreakfast(doc.data()))})
        })
    };
    
    const [listMenuBreakfast, setListMenuBreakfast] = useState(null);
    const [listMenuAllDay, setListMenuAllDay] = useState(null);

    return (
        <main>
            <Button onclick={logout} name='Sair'/>
            <hr></hr>
            <div className='itens'>
                <Button name='Menu All Day' onclick={renderAllDay}/>
                {listMenuAllDay && listMenuAllDay.bebidas.map(itemMenu => (
                    <div key={itemMenu.name}> <ButtonHall name={itemMenu.name} price={itemMenu.price} /> </div>
                ))}
            </div>
            
            <div>
                <Button name='Menu Breakfast' onclick={renderBreakfast}/>
                {listMenuBreakfast && listMenuBreakfast.bebida.map(itemMenu => (
                    <div key={itemMenu.name}> <ButtonHall name={itemMenu.name} price={itemMenu.price} /> </div>
                ))}
            </div>
        </main>
    )
};

export default Hall;