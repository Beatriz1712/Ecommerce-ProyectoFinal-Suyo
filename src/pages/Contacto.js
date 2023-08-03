// eslint-disable-next-line
import {useForm} from "react-hook-form";
// eslint-disable-next-line
function Contacto() {

  const { register, handleSubmit } = useForm();

  const enviar = (data) => {
    console.log(data);
  };

  return (
    <div className="container">
      <h1 className='contacto-title'> Contacto</h1>
      <form className='formulario' onSubmit={handleSubmit(enviar)}>

        <input type="text" placeholder='Ingresar nombre' {...register("nombre")} />

        <input type="email" placeholder='Ingresar email' {...register("email")} />

        <input type="phone" placeholder='Ingresar tu telefono' {...register("telefono")} />

        <button className="btn-enviar" type="submit"> Enviar</button>
      </form>


    </div>
  );
}
 export default Contacto;