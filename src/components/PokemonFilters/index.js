import React, { useContext } from 'react';

import PokemonContext from '../../context/PokemonContext';

import Button from '../Button/';

import './style.css';

function PokemonFilters() {
  const { pokemonTypes, setFilter } = useContext(PokemonContext);

  return (
    <div className="type-filters">
      <div className="buttons">
        {pokemonTypes.map((type, index) => (
          <Button key={index}>{type}</Button>
        ))}
      </div>
      <button className="clear-filters" onClick={() => setFilter('')}>
        Clear Filters
      </button>
    </div>
  );
}

export default PokemonFilters;
