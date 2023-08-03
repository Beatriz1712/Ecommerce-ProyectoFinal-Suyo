import { createContext } from "react";
import { useState } from "react";

 export  const CartContext = createContext();
  export const CartProvider = ({children}) => {
      const [carrito, setCarrito] = useState([]);
      const agregarAlCarrito = (item, cantidad) => {
          const itemAgregado = { ...item, cantidad };

          const nuevoCarrito = [...carrito]
          const estaEnElCarrito = nuevoCarrito.find((producto) => producto.id === itemAgregado.id);

          if (estaEnElCarrito) {
              estaEnElCarrito.cantidad += cantidad;
          } else {
              nuevoCarrito.push(itemAgregado);
          }
          setCarrito(nuevoCarrito);
      }

      const cantidadEnElCarrito = () => {
          return carrito.reduce((acc, prod) => acc + prod.cantidad, 0)
      }

      const precioTotal = () => {
          return carrito.reduce((acc, prod) => acc + prod.precio * prod.cantidad, 0)
      }

      const vaciarCarrito = () => {
          setCarrito([]);
      }

    return(
        <CartContext.Provider value={{
            carrito,
            agregarAlCarrito,
            cantidadEnElCarrito,
            precioTotal,
            vaciarCarrito
        }}>
            {children}
        </CartContext.Provider>
    )
  }