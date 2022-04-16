import React from 'react'

const PeticionApi = () => {
    const [personajes, setPersonajes] = React.useState([])
    const [paginacion, setPaginacion] = React.useState(1)

    const obtenerPersonajes = async () => {
        try {
          console.log('paginación: '+paginacion)
          const res = await fetch(`https://rickandmortyapi.com/api/character/?page=${paginacion}`);
          console.log(`https://rickandmortyapi.com/api/character/?page=${paginacion}`)
          const data = await res.json();
          const results = await data.results;
          setPersonajes(results)
        } catch (error) {
          console.log(error);
        }
      };

    const siguiente= async ()  => {
        await setPaginacion(paginacion+1);
        obtenerPersonajes();
    }
    const atras= async() => {
        await setPaginacion(paginacion-1)
        obtenerPersonajes();
    }
    
   

  return (
    <>
        <h1>PETICIÓN AL API DE RICK AND MORTY</h1>
        <button onClick={obtenerPersonajes}>Traer Personajes</button>
        <button onClick={siguiente}>Siguiente</button>
        <button onClick={atras}>Atrás</button>
        {
                personajes.map(({id, name, image})=> (
                    <div key = {id}>
                        <h4 key={id}>{id} - {name}</h4>)
                        <img src = {image} alt = {name}/>
                    </div>
                ))
        }
    </>
  )
}

export default PeticionApi