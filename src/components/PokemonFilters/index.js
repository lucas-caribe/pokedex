import React, { useContext } from 'react';

import PokemonContext from '../../context/PokemonContext';

import Button from '../Button/';

import './style.css';

function PokemonFilters() {
  const { pokemonTypes } = useContext(PokemonContext);

  return (
    <div className="type-filters">
      <div className="buttons">
        {pokemonTypes.map((type, index) => (
          <Button key={index}>{type}</Button>
        ))}
      </div>
    </div>
  );
}

export default PokemonFilters;
