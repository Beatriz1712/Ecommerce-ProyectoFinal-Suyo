import React, { useContext ,useState} from 'react';
import { CartContext } from '../context/CartContext';
import { useForm } from 'react-hook-form';
import { collection, addDoc } from 'firebase/firestore';  
import { db } from '../../firebase/config';


const Checkout = () => {
     
    const [pedidoId, setPedidoId] = useState ("");
    const {carrito, precioTotal, vaciarCarrito } = useContext(CartContext);
    const { register, handleSubmit } = useForm();
    const comprar = (data) => {
        const pedido = {
            cliente: data,
            productos: carrito,
            total: precioTotal()
        }
        console.log(pedido);
        const pedidosRef = collection(db, "pedidos");

        addDoc(pedidosRef, pedido)
        .then((doc) => {
            setPedidoId(doc.id);
            vaciarCarrito();
        })
      };

      if (pedidoId) {
        return (
            <div className='"container'>
                <h1 className='checkout-title'>¡¡ Muchas gracias por tu compra !!</h1>
                <p className='pedido-checkout'> Tu número de pedido es: {pedidoId}</p>
            </div>
        )

      }

  return (
    <div className="container-contacto">
      <h1 className='contacto-title'> Compra finalizada</h1>
      <form className='formulario' onSubmit={handleSubmit( comprar)}>

        <input className = "input-form" type="text" placeholder='Ingresar nombre' {...register("nombre")} />

        <input className = "input-form" type="email" placeholder='Ingresar email' {...register("email")} />

        <input className = "input-form" type="phone" placeholder='Ingresar tu telefono' {...register("telefono")} />

        <button className="btn-enviar" type="submit">Comprar</button>
      </form>
      

    </div>
  )
}

export default Checkout