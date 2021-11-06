import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import PokemonContext from '../../context/PokemonContext';

import typeColors from '../../typeColors';

import './style.css';

function Button({ children }) {
  const { setFilter, activeFilter } = useContext(PokemonContext);
  
  const isActive = activeFilter === children;
  const typeColor = typeColors[children];

  const buttonStyle = {
    background:
      typeof typeColor === 'object'
        ? `linear-gradient(to bottom, ${typeColor[0]}, ${typeColor[0]} 50%, ${typeColor[1]} 50%)`
        : typeColor,
    outline: isActive ? '2px solid rgb(164, 164, 164)' : 'none',
  };

  return (
    <button
      className="type-button"
      onClick={() => isActive ? setFilter('') : setFilter(children)}
      style={buttonStyle}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Button;
