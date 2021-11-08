import React, { useContext } from 'react';

import Pokemon from '../Pokemon';
import LoadingPikachu from '../LoadingPikachu';

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
        <LoadingPikachu />
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
          <LoadingPikachu />
        </div>
      )}
    </div>
  );
}

export default Pokedex;
