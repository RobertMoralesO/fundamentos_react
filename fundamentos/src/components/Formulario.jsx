import React from 'react'

const Formulario = () => {
    const [fruta, setFruta] = React.useState('')
    const [descripcion, setDescripcion] = React.useState('')
    const [listaFrutas, setListaFrutas] = React.useState([])

    const guardarFrutas = (e) =>{
        e.preventDefault()

        if(!fruta.trim()){
            alert('Digite la Fruta')
            return
        }

        if(!descripcion.trim()){
            alert('Digite la Descripción')
            return
        }

        setListaFrutas([
            ... listaFrutas,
            {nombreFruta: fruta, nombreDescripcion: descripcion}
        ])

        e.target.reset()
        setFruta('')
        setDescripcion('')
    }


  return (
    <div className='container mt-5'>
        <h2>Fomulario</h2>
        <form onSubmit ={guardarFrutas}>
            <input 
            className='form-control mb-2'
            type = "text"
            placeholder='Ingrese Fruta'
            onChange={(e)=> setFruta(e.target.value)}
            />
            <input 
            className='form-control mb-2'
            placeholder='Ingrese Descripción'
            type="text"
            onChange={(e)=> setDescripcion(e.target.value)}
            />
            <button 
            className='btn btn-primary btn-block'
            type='submit'
            >Agregar</button>
        </form>
        <br/>
        {
            listaFrutas.map((item,index)=>(
                <div key={index}>
                    <h4>{item.nombreFruta}-{item.nombreDescripcion}</h4>
                </div>    
            ))
        }

    </div>
  )
}

export default Formulario