import React, { useContext } from 'react';

import Pokemon from '../Pokemon';
import LoadingScreen from '../LoadingScreen';

import PokemonContext from '../../context/PokemonContext';

import './style.css';

function Pokedex() {
  const {
    isFetching,
    filteredPokemon,
    loadMorePokemon,
    loadingMore,
    activeFilter,
  } = useContext(PokemonContext);

  let time = null;

  window.onscroll = () => {
    clearTimeout(time);

    if (!isFetching) {
      time = setTimeout(() => {
        const { scrollHeight, scrollTop, clientHeight } =
          document.documentElement;

        if (scrollHeight - scrollTop - 100 <= clientHeight && !activeFilter) {
          loadMorePokemon();
        }
      }, 500);
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
        {filteredPokemon.length ? (
          filteredPokemon.map((pokemon) => (
            <Pokemon key={pokemon.id} pokemon={pokemon} />
          ))
        ) : (
          <h4>No pokemon</h4>
        )}
      </div>
      {loadingMore && (
        <div className="loading-more">
          <img src="/pokedex/assets/loading.gif" alt="loading..." />
          <span>Loading...</span>
        </div>
      )}
    </div>
  );
}

export default Pokedex;
