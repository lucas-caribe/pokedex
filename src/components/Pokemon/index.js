import React from 'react';
import PropTypes from 'prop-types';

import TypeIcon from '../TypeIcon';

import typeColors from '../../typeColors';
import makeGradient from '../../utils/makeGradient';
import getColors from '../../utils/getColors';

import './style.css';

function Pokemon({ pokemon }) {
  const { name, types, averageWeight, averageHeight, sprite, hp } = pokemon;

  const [mainColor, secondaryColor] = getColors(typeColors[types[0]]);

  const cardStyle = {
    background: secondaryColor
      ? makeGradient(mainColor, secondaryColor)
      : mainColor,
  };

  const cardBodyStyle = {
    background: `no-repeat #fff linear-gradient(to bottom, ${mainColor} 5%, #FFFFFF) top`,
  };

  return (
    <div className="card" style={cardStyle}>
      <div className="card-body" style={cardBodyStyle}>
        <div className="card-header">
          <p className="poke-name">{name}</p>
          <p className="poke-hp">
            HP <span>{hp}</span>
          </p>
          <div className="types">
            {types.map((type) => (
              <TypeIcon key={type} type={type} />
            ))}
          </div>
        </div>

        <div className="card-main-info">
          <img className="poke-image" src={sprite} alt={name} />
          <p className="poke-types">
            {types.length === 1
              ? `Type: ${types[0]}`
              : `Types: ${types.join(' | ')}`}
          </p>
          <p className="poke-info">
            Average Height: {averageHeight.value}{' '}
            {averageHeight.measurementUnit} | Average Weight:{' '}
            {averageWeight.value} {averageWeight.measurementUnit}
          </p>
        </div>
      </div>
    </div>
  );
}

Pokemon.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    types: PropTypes.array.isRequired,
    averageWeight: PropTypes.object.isRequired,
    averageHeight: PropTypes.object.isRequired,
    sprite: PropTypes.string.isRequired,
    hp: PropTypes.number.isRequired,
  }).isRequired,
};

export default Pokemon;
