import { useState } from "react";
import Boton from "./componentes/boton";
import Contador from "./componentes/contador";
import "./estilos/App.css";
import {Animated} from "react-animated-css";




function Asd({n}) {
  return(
    <Animated animationIn="bounceInLeft" animationOut="fadeOut" isVisible={true}>
    <div>
        OMG!!! {n} es demasiado
    </div>
    </Animated>
    )
}




const notificaciones = [10,20,30,40,50];



function App() {
  let [numero, setNum] = useState(0);

  const funcionClick = () => {
    setNum(numero + 1);
  };
  const funcionReinicio = () => {
    setNum((numero = 0));
  };
  const found = notificaciones.find(element => element === numero);

  if (found === numero) { 
    return(    <div className="App">
    <div className="contenedor">
      <div className="contenedorBotones">
        <Contador numeroClicks={numero} />
        <Boton tipoBoton="clickBtn" texto="Click me" handler={funcionClick} />
        <Boton tipoBoton="reinicioBtn" texto="Reiniciar" handler={funcionReinicio}/>
      </div>
    </div>
    <Asd n={numero}/>
  </div>
    )
  }

  return (
    <div className="App">
      <div className="contenedor">
        <div className="contenedorBotones">
          <Contador numeroClicks={numero} />
          <Boton tipoBoton="clickBtn" texto="Click me" handler={funcionClick} />
          <Boton tipoBoton="reinicioBtn" texto="Reiniciar" handler={funcionReinicio}/>
        </div>
      </div>
    </div>
  );

}

export default App;
