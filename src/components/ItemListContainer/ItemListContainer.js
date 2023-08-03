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

      /*
        ANTES DE FIREBASE
        category ?
            pedirProductos()
              .then((resp) => {
                setProductos(resp.filter(prod => prod.category === category));
              })
              .catch(error => {
                console.error(error);
              })
            
            :
            pedirProductos()
              .then((resp) => {
                setProductos(resp);
              })
              .catch(error => {
                console.error(error);
              })
      */


        /*
        DESPUES DE FIRABASE
          const productosRef = collection(db, "productos");

            getDocs(productosRef)
            .then((resp) => {
              console.log(resp.docs[0].id);
              console.log(resp.docs[0].data());

              console.log(
                resp.docs.map((dov) => {
                  return { ...doc.data(), id: doc.id}
                })
              )
            })
       */