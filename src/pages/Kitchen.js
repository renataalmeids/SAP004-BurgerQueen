import React from 'react';
import firebase from '../config/Config'
import Button from '../components/Button';


const Kitchen = () => {
    const logout = () => {firebase.auth().signOut();}
    return (
        <main>
            <div>
                <Button onclick={logout} name='Sair'/>
                <h1>Kitchen</h1>
            </div>
        </main>
    )
}

export default Kitchen;