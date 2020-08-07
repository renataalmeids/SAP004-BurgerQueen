import React, { useState } from 'react';
import firebase from '../config/Config';
import ButtonHall from '../components/ButtonHall';
import Button from '../components/Button';
import Input from '../components/Input';
import './Hall.css';

const Hall = () => {
    const [client, setClient] = useState('');
    const [table, setTable] = useState('');
    const [product, setProduct] = useState([]);
    const [listMenuBreakfast, setListMenuBreakfast] = useState(null);
    const [listMenuAllDay, setListMenuAllDay] = useState(null);
    
    
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
    const renderOrder = (itemMenu) =>{
        if(product.map(elem => elem.name !== itemMenu.name )){
            setProduct([...product, itemMenu]);
        }else{
            setProduct([...product, itemMenu]);
        }
        
    }
    const updateOrder = () =>{
        if(client && table != null){
            alert('funfou o  botão')
            firebase.firestore().collection('pedidos').add({
                client: client,
                mesa: table,
                pedido:product
            });
            setProduct([]);
            setTable('');
            setClient('');
        }
        else{
            alert('Por favor, insira o nome da mesa e do cliente')
        }
    }
    const delOrder = item =>{
        const removeItem = product.map(elem => elem.name !== item.name );
        setProduct([...removeItem]);
    }

    return (
        <main className='main-hall'>
            <Button onclick={logout} className='btn-sair' name='Sair'/>
            <hr></hr>

            <div className='entire-menu'>

                <div className='itens-all-day'>
                    <Button className='btn-menu' name='Menu All Day' onclick={renderAllDay}/>
                    {listMenuAllDay && listMenuAllDay.bebidas.map(itemMenu => (
                        <div key={itemMenu.name}> 
                            <ButtonHall className='btn-itens' name={itemMenu.name} price={itemMenu.price}
                            onclick={()=>renderOrder(itemMenu)}
                            onChange={(event) => setProduct(event.target.value)}/>  
                        </div>
                    ))}

                    {listMenuAllDay && listMenuAllDay.hamburguer.map(itemMenu => (
                        <div key={itemMenu.name}> 
                            <ButtonHall className='btn-itens' name={itemMenu.name} price={itemMenu.price} 
                            onclick={()=>renderOrder(itemMenu)}
                            onChange={(event) => setProduct(event.target.value)}/> 
                        </div>
                    ))}

                    {listMenuAllDay && listMenuAllDay.acompanhamentos.map(itemMenu => (
                        <div key={itemMenu.name}> 
                            <ButtonHall className='btn-itens' name={itemMenu.name} price={itemMenu.price}
                            onclick={()=>renderOrder(itemMenu)}
                            onChange={(event) => setProduct(event.target.value)}/> 
                        </div>
                    ))}

                </div>

                <div className='itens-breakfast'>
                    <Button className='btn-menu' name='Menu Breakfast' onclick={renderBreakfast}/>
                    {listMenuBreakfast && listMenuBreakfast.bebida.map(itemMenu => (
                        <div key={itemMenu.name}> 
                            <ButtonHall className='btn-itens' name={itemMenu.name} price={itemMenu.price} 
                            onclick={()=>renderOrder(itemMenu)}
                            onChange={(event) => setProduct(event.target.value)}/> 
                        </div>
                    ))}

                    {listMenuBreakfast && listMenuBreakfast.comidas.map(itemMenu => (
                        <div key={itemMenu.name}> 
                            <ButtonHall className='btn-itens' name={itemMenu.name} price={itemMenu.price}
                            onclick={()=>renderOrder(itemMenu)}
                            onChange={(event) => setProduct(event.target.value)}/> 
                        </div>
                    ))}

                </div>

            </div>

            <div className='order'>
                <p>Pedido</p>
                <label htmlFor='input-client'>
                    Cliente:
                    <Input type='text' name='input-client' value={client} onChange={(event) => setClient(event.target.value)}/>
                </label>
                <label htmlFor='input-client'>
                    Mesa:
                    <Input type='number' name='input-client' value={table} onChange={(event) => setTable(event.target.value)}/>
                </label>
                <Button className='btn-menu' onclick={updateOrder} name='Finalizar Pedido'/>
                {product && product.map(order => (
                    <div key={order.name} id={order.id}> 
                        <p>{order.name} {order.price}</p> 
                        <Button key={order.name} className='btn-del' key={order.name} onclick={()=>delOrder(order)} name='🗑️'/> 
                    </div>
                ))}
            </div>

        </main>
    )
};

export default Hall;