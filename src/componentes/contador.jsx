import '../estilos/contador.css';

function Contador ({numeroClicks}){

  return(
    <div className="contador">
      {numeroClicks}
    </div>  
    );
};

export default Contador;


