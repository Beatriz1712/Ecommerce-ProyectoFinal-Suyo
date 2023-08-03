
import ItemCount from "../ItemCount/ItemCount"
import { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";

//verificar import de cart
const ItemDetail = ({ item }) => {
  // eslint-disable-next-line
const {carrito, agregarAlCarrito} = useContext(CartContext);

  const [cantidad, setCantidad] = useState(1);

  const handlerRestar = () => {
    cantidad > 1 && setCantidad(cantidad - 1)
  }
  const handlerSumar = () => {
     cantidad < item.stock && setCantidad(cantidad + 1)
  }
 

  return (
    <div className='container'>
      <div className='producto-detalle'>
        <img src={item.image} alt={item.titulo} />
        <div>
            <h3 className='titulo'>{item.titulo}</h3>
            <p className='precio'>${item.precio}</p>
            <p className='decripcion'>{item.description}</p>
            <p className='categoria'> Categoria:{item.category}</p>
            <ItemCount 
             cantidad={cantidad}
             handlerRestar={handlerRestar}
             handlerSumar={handlerSumar} 
             handleAgregar={() => {agregarAlCarrito(item,cantidad)}}/>
        </div>
      </div>
    </div>
  )
}

export default ItemDetail;
