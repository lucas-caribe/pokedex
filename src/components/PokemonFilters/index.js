import React from 'react';

import Button from '../Button/';

import './style.css';

function PokemonFilters({ pokemonTypes, filterPokemon, clearFilters }) {
  return (
    <div className="type-filters">
      <div className="buttons">
        {pokemonTypes.map((type, index) => (
          <Button key={index} filterPokemon={filterPokemon}>
            {type}
          </Button>
        ))}
      </div>
      <button className="clear-filters" onClick={clearFilters}>
        Clear Filters
      </button>
    </div>
  );
}

export default PokemonFilters;
