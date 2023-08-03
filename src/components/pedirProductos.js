import data from "../data/data.json";

export  const pedirProductos = () => {
    return new Promise((resolve) => {
        setTimeout( () => {
          resolve (data);
        }, 500)
      })
}
export  const pedirProductoById = (id) => {
    return new Promise((resolve, reject) => {
      const item = data.find((el) =>el.id === id);
       if (item) {
          resolve(item);
        } else {
          reject({
            error: "No se encontro dicho producto"
          })
        }
      }
    )
    }
    
