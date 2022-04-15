import React from 'react'

const Variables = () => {
    const saludo = "Hola Mundo"
    const imagen = 'https://picsum.photos/300'
    const texto_alt = 'Esto es una imagen de picsum'
    return (
        <>
        <h1>{saludo}</h1>
        <img src = {imagen} alt = {texto_alt}/>
        </>
    )
}

export default Variables