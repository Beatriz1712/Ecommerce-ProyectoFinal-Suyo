
import { CartContext } from "../context/CartContext"
import { Link } from "react-router-dom";
import { useContext } from "react";

const CartWidget = () => {

  const {cantidadEnElCarrito }= useContext(CartContext);

  return (
    <div>
       <Link className="menu-link" to='/carrito' > 🛒 </Link>
       <span className="numero">{cantidadEnElCarrito()} </span>
    </div>
  )
}

export default CartWidget;

