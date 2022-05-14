import React from 'react'
import PropTypes from 'prop-types';

const Contador = ({valor_inicial}) => {
  const [contador, setContador] = React.useState(valor_inicial)
  const aumentar = () => setContador(contador + 1)
  const decrementar = () => setContador(contador-1)
  const resetear = () => setContador(valor_inicial)

  return (
    <>
      <hr/>
        <h1>Contador</h1>
        <h1>El valor de la variable contador es: {contador}</h1>
        <h1>
          {
            contador < 0 ? 'Contador es negativo' : 'Contador No es negativo'
          }
        </h1>
        <button onClick={aumentar}>Aumentar</button>
        <button onClick={resetear}>Resetear</button>
        <button onClick={decrementar}>Decrementar</button>
    
    </>
  )
}

Contador.propTypes = {
  valor_inicial: PropTypes.number.isRequired
}

Contador.defaultProps = {
  valor_inicial: 0
}


export default Contador