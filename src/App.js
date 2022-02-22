import './App.css';

import Cabecera from './components/Cabecera';

import Cuerpo from './components/Cuerpo';

import React, {useState} from 'react';

function App() {

  var nombres = ['David1', 'David2', 'David3'];

  var titulo = 'Prueba React';

  const [datos, setDatos] = useState({titulo:titulo, nombres:nombres})

  const anadirunnombre = (nombre)=>{
    datos.nombres.push(nombre)
    setDatos({
      titulo:titulo,
      nombres:[...datos.nombres]
    })
  }

  const cambiaruntitulo = (titulo)=>{
    datos.titulo = titulo
    setDatos({
      titulo:datos.titulo,
      nombres:nombres
    })
  }

  return (
    <div>
      <Cabecera titulo={datos.titulo}/>
      <Cuerpo nombres={datos.nombres} anadir={anadirunnombre} cambiar={cambiaruntitulo}/>
    </div>
  )

};