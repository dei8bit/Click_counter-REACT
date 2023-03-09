import '../estilos/botons.css';

function Boton({ texto, tipoBoton, handler }) {
  return(
      <button className= {tipoBoton} onClick={handler}>
        {texto}
      </button>    
  )}

export default Boton;
