//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { CartContext } from "../context/CartContext"
import { Link } from "react-router-dom";
import { useContext } from "react";

const CartWidget = () => {

  const {cantidadEnElCarrito }= useContext(CartContext);

  return (
    <div>
       <Link className="menu-link" to='/carrito' >Carrito </Link>
       <span className="numero">{cantidadEnElCarrito()} </span>
    </div>
  )
}

export default CartWidget;

/*
{<FontAwesomeIcon icon={faCartShopping} />}
       { <span className="number">8</span>}
       */