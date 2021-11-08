import React from 'react';
import PropTypes from 'prop-types';

import typeColors from '../../typeColors';
import getColors from '../utils/getColors';

import './style.css';

function TypeIcon({ type }) {
  const [mainColor] = getColors(typeColors[type]);

  return (
    <div className="type-icon" style={{ background: mainColor }}>
      <img src={`/pokedex/assets/type-icons/${type}.svg`} alt={type} />
    </div>
  );
}

TypeIcon.propTypes = {
  type: PropTypes.string.isRequired,
};

export default TypeIcon;
