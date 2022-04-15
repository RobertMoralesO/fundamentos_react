import React from 'react'

const Eventos = () => {
    const [texto, setText] = React.useState('Texto inicial')
    const eventoClick = () => {
        const aux = 'Texto inicial'
        if(texto == aux){
            setText('Cambiando el texto . . .')
            return
        }
        setText(aux)
    }
    
  return (
    <>
        <h2>{texto}</h2>
        <button onClick={eventoClick}>Click</button>
    </>
  )
}

export default Eventos