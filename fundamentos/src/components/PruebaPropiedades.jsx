import React from 'react'
import PropTypes from 'prop-types';

const PruebaPropiedades = ({titulo, cuerpo, cantidad}) => {
  return (
      <>
        <h1>{titulo} </h1>
        <h2>{cuerpo}</h2>
        <h3>{cantidad * 5}</h3>
      </>
    
  );
}
PruebaPropiedades.propTypes = {
    titulo: PropTypes.string.isRequired,
    cuerpo: PropTypes.string.isRequired,
    cantidad: PropTypes.number.isRequired
}

PruebaPropiedades.defaultProps = {
    titulo: 'Aquí debe ir un título',
    cuerpo: 'Aquí debe ir un cuerpo',
    cantidad: 0
}

export default PruebaPropiedades