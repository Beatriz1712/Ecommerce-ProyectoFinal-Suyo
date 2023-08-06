import React from 'react'
import { useContext } from 'react';
import { CartContext }from './context/CartContext'
import { Link } from 'react-router-dom';

const Carrito = () => {

    const {carrito, precioTotal, vaciarCarrito } = useContext(CartContext);
    const handleVaciar = ()=>{
        vaciarCarrito();
    }
  return (
    <div className='container-carrito'>
       <h1>🛒</h1> 
       {
            carrito.map((prod) => (
                <div key={prod.id}>
                    
                    <h2>{prod.titulo}</h2>
                    <p>Precio unit: ${prod.precio}</p>
                    <p>Precio total:${prod.precio * prod.cantidad}</p>
                    <p>cantidad : {prod.cantidad}</p>
                    <br/>
                </div>
            ))
       }
       {
            carrito.length >0 ?
            <>
                <h4>PRECIO TOTAL: ${precioTotal()}</h4>
                <button onClick={handleVaciar}>Vaciar carrito</button>
                <Link className="finalizar" to="/checkout">Finalizar compra</Link>
            </>:
            <h2>El carrito está vacio ☹</h2>
       }
    </div>
  )
}

export default Carrito