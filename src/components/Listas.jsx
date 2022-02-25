import React from 'react'

const Listas = () => {

    const estadoInicial = [
        {id:1, texto: 'Tarea 1'},
        {id:2, texto: 'Tarea 2'},
        {id:3, texto: 'Tarea 3'}
    ]
    const [lista, setLista] = React.useState(estadoInicial)
  return (
    <div>
        <hr />
        <h2>Listas</h2>
        {
            lista.map((item) => (
                <h4 key={item.id}> {item.texto}</h4>
            ))
        }
    </div>
  )
}

export default Listas