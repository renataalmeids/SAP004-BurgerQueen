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
    const updateOrder = () =>{
        if(client && table != null){
            firebase.firestore().collection('pedidos').add({
                client: client,
                mesa: table,
                pedido:product,
                status: 'Em preparo'
            });
            alert(`Olá, o pedido do cliente ${client} da mesa ${table} foi finalizado com sucesso.`);
            setProduct([]);
            setTable('');
            setClient('');
        }
        else{
            alert('Por favor, insira o nome da mesa e do cliente')
        }
    }
    const monitorarQuantidade = item =>{
        if(!product.includes(item)){
            item.count = 1;
            setProduct([...product, item]);

        }else{
            item.count++;
            setProduct([...product]);
        }
    }

    const mostrarPedidos = item =>{
        setProduct([...product, item]);
        monitorarQuantidade(item);
    }
    const delOrder = item =>{
        if (product.includes(item)) {
            item.count--;
            setProduct([...product])
            if (item.count === 0) {
                product.splice(product.indexOf(item), 1);
                setProduct([...product])
                console.log(item.count, product, item);
            }
        }
    }

    return (
        <main className='main-hall'>
            <nav className='nav-hall'>
                <Button onclick={logout} className='btn-sair' name='Sair'/>
                <hr></hr>
            </nav>
            
            <div className='entire-menu'>

                <div className='itens-all-day'>
                    <Button className='btn-menu' name='Menu All Day' onclick={renderAllDay}/>
                    {listMenuAllDay && listMenuAllDay.bebidas.map(itemMenu => (
                        <div key={itemMenu.name}> 
                            <ButtonHall className='btn-itens' name={itemMenu.name} price={itemMenu.price}
                            onclick={()=>mostrarPedidos(itemMenu)}
                            onChange={(event) => setProduct(event.target.value)}/>  
                        </div>
                    ))}

                    {listMenuAllDay && listMenuAllDay.hamburguer.map(itemMenu => (
                        <div key={itemMenu.name}> 
                            <ButtonHall className='btn-itens' name={itemMenu.name} price={itemMenu.price} 
                            onclick={()=>monitorarQuantidade(itemMenu)}
                            onChange={(event) => setProduct(event.target.value)}/> 
                        </div>
                    ))}

                    {listMenuAllDay && listMenuAllDay.acompanhamentos.map(itemMenu => (
                        <div key={itemMenu.name}> 
                            <ButtonHall className='btn-itens' name={itemMenu.name} price={itemMenu.price}
                            onclick={()=>mostrarPedidos(itemMenu)}
                            onChange={(event) => setProduct(event.target.value)}/> 
                        </div>
                    ))}

                </div>

                <div className='itens-breakfast'>
                    <Button className='btn-menu' name='Menu Breakfast' onclick={renderBreakfast}/>
                    {listMenuBreakfast && listMenuBreakfast.bebida.map(itemMenu => (
                        <div key={itemMenu.name}> 
                            <ButtonHall className='btn-itens' name={itemMenu.name} price={itemMenu.price} 
                            onclick={()=>mostrarPedidos(itemMenu)}
                            onChange={(event) => setProduct(event.target.value)}/> 
                        </div>
                    ))}

                    {listMenuBreakfast && listMenuBreakfast.comidas.map(itemMenu => (
                        <div key={itemMenu.name}> 
                            <ButtonHall className='btn-itens' name={itemMenu.name} price={itemMenu.price}
                            onclick={()=>mostrarPedidos(itemMenu)}
                            onChange={(event) => setProduct(event.target.value)}/> 
                        </div>
                    ))}

                </div>

            </div>

            <div className='order'>
                <p className='title-order'>Pedido</p>
                <label htmlFor='input-client'>
                    Cliente:
                    <Input type='text' name='input-client' value={client} onChange={(event) => setClient(event.target.value)}/>
                </label>
                <label htmlFor='input-client'>
                    Mesa:
                    <Input type='number' name='input-client' value={table} onChange={(event) => setTable(event.target.value)}/>
                </label>
                <Button className='btn-order' onclick={updateOrder} name='Finalizar Pedido'/>
                {product && product.map(order => (
                    <div key={order.name} id={order.id}> 
                        <p>{order.name} {order.price} {order.count}</p> 
                        <Button key={order.name} className='btn-del' onclick={()=>delOrder(order)} name='🗑️'/> 
                    </div>
                ))}
            </div>
        </main>
    )
};

export default Hall;