import ItemList from "../ItemList/ItemList";
//import { pedirProductos } from "../pedirProductos";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs,query,where } from "firebase/firestore";
import { db } from "../../firebase/config.js";

const ItemListContainer = () => {

  const [productos, setProductos] = useState([]);
  const { category } = useParams()

  useEffect(() => {
             const productosRef = collection(db, "productos");
             const q = category ? query(productosRef,where("category", "==",category)) : productosRef;

            getDocs(q)
            .then((resp) => {
             
               setProductos(
                resp.docs.map((doc) => {
                  return { ...doc.data(), id: doc.id}
                })
              )
            })
   

  }, [category])


  return (
    <div className="itemListContainer">
      <h2 className='main-title'>Productos</h2>
      <ItemList productos={productos} />
    </div>
  )

};
export default ItemListContainer;

     