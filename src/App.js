
import {useState} from "react";
import './App.sass';



function App() {
 //Aquí comienzan las sentencias js
  const notas = [
    {
      nombre: "Do",
      link: require("./notes/do.wav"), //archivos wav son archivos de sonido/require se utiliza para llamar a una ruta de audio o video
      sostenido: true //tecla negra
    },
    {
      nombre: "Re",
      link: require("./notes/re.wav"),
      sostenido: true
    },
    {
      nombre: "Mi",
      link: require("./notes/mi.wav"),
    },
    {
      nombre: "Fa",
      link: require("./notes/fa.wav"),
      sostenido: true
    },
    {
      nombre: "Sol",
      link: require("./notes/sol.wav"),
      sostenido: true
    },
    {
      nombre: "La",
      link: require("./notes/la.wav"),
      sostenido: true
    },
    {
      nombre: "Si",
      link: require("./notes/si.wav"),
    },
  ]

  const handleClickNote = nota =>{
    setSonando(nota.nombre);
    const sonido = new Audio(nota.link.default); //notas en posición 0 retorna un link distinto a wav y lo desenvuelvo hasta el default para que me devuelva la ruta limpia que utilizará para el sonido
    sonido.play()
  }


  //Hook useState necesita:
  //-Variable inicial:     [click,
  //-Una Función que se dedique a actualizar esa variable:    ,setClick]
  //-El Valor inicial de dicha variable: dentro de los paréntesis () del useState
  const [click, setClick ] = useState(0);
  const [sonando, setSonando] = useState("");  

  /* let click = 0; */

  const handlerClickCount = () =>{
    setClick(click + 1);
  }
  
  setTimeout(() =>{
    setSonando("")
  },300)


  
  //Aquí comienzan las expresiones
  return (
    <div>
      <div className= "titulo">
        <h1>Piano con React</h1>
        <h2>Hecho por Kari 🎈</h2>
        <h3 className = "esta-sonando">{sonando}</h3>
        {/* <button onClick = {handlerClickCount}>Has dado {click} clicks</button> */}
      </div>
      <div className= "container">

        {notas.map(nota => (
         <div
         key={Math.random() * 100} 
         className = {`nota ${sonando === nota.nombre && "sonando"}`}
          onClick = {() =>handleClickNote(nota)}
          >
           {nota.sostenido && <div className= "negra"></div>} 
         </div> 
        ))}
        {/* <div className= "nota" onClick={handleClickNote}>
          <div className= "negra"></div>
        </div>
        <div className= "nota">
          <div className= "negra"></div>
        </div>
        <div className= "nota"></div>
        <div className= "nota">
          <div className= "negra"></div>
        </div>
        <div className= "nota">
          <div className= "negra"></div>
        </div>
        <div className= "nota">
          <div className= "negra"></div>
        </div>
        <div className= "nota"></div> */}
      </div>   
    </div>
  );
}

export default App;
