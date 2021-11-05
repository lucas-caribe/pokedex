import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import PokemonContext from './PokemonContext';

import { fetchPokemon } from '../services/pokemonApi';

import typeColors from '../typeColors';

const PokemonProvider = ({ children }) => {
  const [pokemonList, setPokemonList] = useState([]);
  const [filteredPokemon, setFilteredPokemon] = useState([]);
  const [activeFilter, setActiveFilter] = useState('');
  const [isFetching, setIsFetching] = useState(true);
  const [nextPage, setNextPage] = useState('');
  // const [searchTerm, setSearchTerm] = useState('');

  const pokemonTypes = Object.keys(typeColors);

  useEffect(() => {
    const fetchPokemonData = async () => {
      setIsFetching(true);
      const [pokemonData, next] = await fetchPokemon();
      setPokemonList(pokemonData);
      setNextPage(next);
      setIsFetching(false);
    };

    fetchPokemonData();
  }, []);

  useEffect(() => {
    const filterPokemon = () => {
      setFilteredPokemon(
        pokemonList.filter(
          ({ types }) => types.includes(activeFilter) || !activeFilter,
        ),
      );
    };

    filterPokemon();
  }, [activeFilter, pokemonList]);

  const setFilter = (filter) => setActiveFilter(filter);

  const loadMorePokemon = async () => {
    const [pokemonData, next] = await fetchPokemon(nextPage);
    setPokemonList([...pokemonList, ...pokemonData]);
    setNextPage(next);
  };

  return (
    <PokemonContext.Provider
      value={{
        pokemonList,
        filteredPokemon,
        activeFilter,
        pokemonTypes,
        isFetching,
        setFilter,
        loadMorePokemon,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};

PokemonProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PokemonProvider;
