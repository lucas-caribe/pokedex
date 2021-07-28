import React from 'react';

import TypeIcon from '../TypeIcon';

import typeColors from '../../typeColors';

import './style.css';

// attack,
// defense,
// specialAttack,
// specialDefense,
// speed,

function Pokemon({ pokemon }) {
  const { name, types, averageWeight, averageHeight, sprite, hp } = pokemon;

  const typeColor = typeColors[types[0]];

  const cardStyle = {
    background:
      typeof typeColor === 'object'
        ? `linear-gradient(to bottom, ${typeColor[0]}, ${typeColor[0]} 50%, ${typeColor[1]} 50%)`
        : typeColor,
  };

  const cardBodyStyle = {
    background: `no-repeat #fff linear-gradient(to bottom, ${
      typeof typeColor === 'object' ? typeColor[0] : typeColor
    } 5%, #FFFFFF) top`,
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
          <p>
            Average Height: {averageHeight.value}{' '}
            {averageHeight.measurementUnit} | Average Weight:{' '}
            {averageWeight.value} {averageWeight.measurementUnit}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Pokemon;
