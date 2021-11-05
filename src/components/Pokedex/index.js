import React, { useContext } from 'react';

import Pokemon from '../Pokemon';
import LoadingScreen from '../LoadingScreen';

import PokemonContext from '../../context/PokemonContext';

import './style.css';

function Pokedex() {
  const { isFetching, filteredPokemon, loadMorePokemon } =
    useContext(PokemonContext);

  window.onscroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      loadMorePokemon();
    }
  };

  if (isFetching) {
    return (
      <div className="main-content">
        <LoadingScreen />
      </div>
    );
  }

  return (
    <div className="main-content">
      <div className="pokedex">
        {filteredPokemon.length > 0 &&
          filteredPokemon.map((pokemon) => (
            <Pokemon key={pokemon.id} pokemon={pokemon} />
          ))}
      </div>
    </div>
  );
}

export default Pokedex;
