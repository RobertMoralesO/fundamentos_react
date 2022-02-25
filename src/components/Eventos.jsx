import React from 'react'
import { useState } from 'react'

const Eventos = () => {
 const [texto, setTexto] = useState('Texto desde estado')
 const eventoclick = () =>{
     console.log('me diste click')
     setTexto('Cambiando el texto ...')
 }

  return (
    <div>
        <hr/>
        <h2>{texto}</h2>
        <button onClick={() => eventoclick()}>click</button>
        </div>
  )
}

export default Eventos