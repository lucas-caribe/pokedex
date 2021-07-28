import React from 'react';

import typeColors from '../../typeColors';

import './style.css';

function TypeIcon({ type }) {
  const typeColor =
    typeof typeColors[type] === 'object'
      ? typeColors[type][0]
      : typeColors[type];

  const typeIconStyle = {
    background: typeColor,
  };

  return (
    <div className="type-icon" style={typeIconStyle}>
      <img src={`./assets/type-icons/${type}.svg`} alt={type} />
    </div>
  );
}

export default TypeIcon;
