// import Button from 'react-bootstrap/Button';
import{Link} from 'react-router-dom';


 const Item = ({producto}) => {
   
  return (
       <div className='producto' >
        <img src = {producto.image} alt= {producto.titulo}/>
          <div>
              <h4>{producto.titulo}</h4> 
              <p>Precio: ${producto.precio}</p>
              <p>Categoria: {producto.category}</p>
              <Link className='Ver-mas' to={`/Item/${producto.id}`}>Ver más</Link>
              
          </div>
     </div>

    )
    }
    export default Item; 
      
        