import React from 'react';

import typeColors from '../../typeColors';

import './style.css';

function Button({ children, filterPokemon }) {
  const typeColor = typeColors[children];

  const buttonStyle = {
    background:
      typeof typeColor === 'object'
        ? `linear-gradient(to bottom, ${typeColor[0]}, ${typeColor[0]} 50%, ${typeColor[1]} 50%)`
        : typeColor,
  };

  return (
    <button
      className="type-button"
      onClick={() => filterPokemon(children)}
      style={buttonStyle}
    >
      {children}
    </button>
  );
}

export default Button;
