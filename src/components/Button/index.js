import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import PokemonContext from '../../context/PokemonContext';

import typeColors from '../../typeColors';
import makeGradient from '../utils/makeGradient';
import getColors from '../utils/getColors';

import './style.css';

function Button({ children }) {
  const { setFilter, activeFilter } = useContext(PokemonContext);

  const isActive = activeFilter === children;
  const [mainColor, secondaryColor] = getColors(typeColors[children]);

  const buttonStyle = {
    background: secondaryColor
      ? makeGradient(mainColor, secondaryColor)
      : mainColor,
    outline: isActive ? '2px solid #eed535' : 'none',
  };

  if (activeFilter) {
    buttonStyle['filter'] = isActive ? 'none' : 'grayscale(1) opacity(0.2)';
  }

  return (
    <button
      className="type-button"
      onClick={() => (isActive ? setFilter('') : setFilter(children))}
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
