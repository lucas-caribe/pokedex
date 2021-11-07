import React from 'react';
import PropTypes from 'prop-types';

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
      <img src={`/pokedex/assets/type-icons/${type}.svg`} alt={type} />
    </div>
  );
}

TypeIcon.propTypes = {
  type: PropTypes.string.isRequired,
};

export default TypeIcon;
