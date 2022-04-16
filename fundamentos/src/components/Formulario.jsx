import React, { useEffect } from 'react'
import {nanoid} from 'nanoid'

const Formulario = () => {
    const [fruta, setFruta] = React.useState('')
    const [descripcion, setDescripcion] = React.useState('')
    const [listaFrutas, setListaFrutas] = React.useState([])
    const [id, setId] = React.useState('')
    const [modoEdicion, setModoEdicion] = React.useState(false)
    const [error, setError] = React.useState(null)

    const guardarFrutas = (e) =>{
        e.preventDefault()

        if(!fruta.trim()){
           setError('Digite la Fruta')
            return
        }

        if(!descripcion.trim()){
            setError('Digite la Descripción')
            return
        }

        setListaFrutas([
            ... listaFrutas,
            {id:nanoid(), nombreFruta: fruta, nombreDescripcion: descripcion}
        ])

        e.target.reset()
        setFruta('')
        setDescripcion('')
        setError(null)
    }

    const editar = item =>{
        setFruta(item.nombreFruta)
        setDescripcion(item.nombreDescripcion)
        setModoEdicion(true)
        setId(item.id)
    }

    const editarFrutas = e =>{
        e.preventDefault()

        if(!fruta.trim()){
            setError('Digite la Fruta')
             return
         }
 
         if(!descripcion.trim()){
             setError('Digite la Descripción')
             return
         }

        const arrayEditado = listaFrutas.map(
            item => item.id ===id ? {id:id, nombreFruta:fruta, nombreDescripcion: descripcion}: item
        )

        setListaFrutas(arrayEditado)
        setFruta('')
        setDescripcion('')
        setId('')
        setModoEdicion(false)
        setError(null)
    } 

    const eliminar = id =>{
        const aux = listaFrutas.filter(item => item.id !== id)
        setListaFrutas(aux)
    }

    const cancelar = () =>{
        setModoEdicion(false)
        setFruta('')
        setId('')
        setDescripcion('')
        setError(null)
    }

  return (
    <div className='container mt-5'>
        <h1 className='text-center'>CRUD BÁSICO</h1>
        <hr/>
        <div className='row'>
            <div className='col-8'>
                <h4 className='text-center'>Listado de Frutas</h4>
                <ul className='list-group'>
                    {
                        listaFrutas.map(item=>(
                            <li className='list-group-item' key={item.id}>
                                <span className='lead'>{item.nombreFruta}-{item.nombreDescripcion}</span>
                                <button className='btn btn-danger btn-sm float-end mx-2' onClick={()=> eliminar(item.id)}>
                                Eliminar
                                </button>
                                <button className='btn btn-warning btn-sm float-end'onClick={()=>editar(item)}>
                                Editar
                                </button>
                            </li>    
                        ))
                    }
                </ul>
            </div>
            <div className='col-4'>
                <h4 className='text-center'>
                    {
                        modoEdicion ? 'Editar Frutas' : 'Agregar Frutas'
                    }
                    </h4>
                <form onSubmit ={modoEdicion ? editarFrutas: guardarFrutas}>
                    {
                        error ? <span className='text-danger'>{error}</span> : null
                    }
                    <input 
                    className='form-control mb-2'
                    type = "text"
                    placeholder='Ingrese Fruta'
                    onChange={(e)=> setFruta(e.target.value)}
                    value = {fruta}
                    />
                    <input 
                    className='form-control mb-2'
                    placeholder='Ingrese Descripción'
                    type="text"
                    onChange={(e)=> setDescripcion(e.target.value)}
                    value={descripcion}
                    />

                    {
                        modoEdicion ?
                        (
                            <>
                                <button 
                                className='btn btn-warning btn-block'
                                type='submit'
                                >Editar</button>
                                <button 
                                className='btn btn-dark btn-block mx-2'
                                onClick={() => cancelar()}
                                >Cancelar</button>
                            </>
                        )
                        :

                            <button 
                            className='btn btn-primary btn-block'
                            type='submit'
                            >Agregar</button>

                        }
                </form>
            </div>
        </div>
    </div>
  )
}

export default Formulario