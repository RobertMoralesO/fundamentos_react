import React from 'react'

const Variables = () => {
    const saludo = 'Hola mundo desde una constante'
    const imagen = 'https://picsum.photos/200'
    const texto_imagen = 'Imagen aleatoria'

  return (
    <div>
        <h2>Nuevo Componente {saludo}</h2>
        <img src={imagen} alt={texto_imagen}/>
    </div>
  )
}

export default Variables