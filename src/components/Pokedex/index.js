import React, { useState, useEffect } from 'react';

import Pokemon from '../Pokemon';
import PokemonFilters from '../PokemonFilters';
import LoadingScreen from '../LoadingScreen';

import typeColors from '../../typeColors';

import './style.css';

const baseURL = 'https://pokeapi.co/api/v2';

function Pokedex() {
  const [pokemonList, setPokemonList] = useState([]);
  const [filteredPokemon, setFilteredPokemon] = useState([]);
  const [pokemonTypes, setPokemonTypes] = useState([]);

  useEffect(() => {
    async function fetchPokemonApi() {
      const fullList = [];

      for (let i = 1; i <= 200; i++) {
        try {
          const response = await fetch(`${baseURL}/pokemon/${i}`);
          const data = await response.json();

          const { id, name, height, weight, sprites, types, stats } = data;
          const typeNames = types.map((type) => type.type.name);

          fullList.push({
            id,
            name,
            averageWeight: {
              value: weight / 10,
              measurementUnit: 'kg',
            },
            averageHeight: {
              value: height / 10,
              measurementUnit: 'm',
            },
            sprite: sprites.other['official-artwork'].front_default,
            types: typeNames,
            hp: stats[0].base_stat,
            attack: stats[1].base_stat,
            defense: stats[2].base_stat,
            specialAttack: stats[3].base_stat,
            specialDefense: stats[4].base_stat,
            speed: stats[5].base_stat,
          });
        } catch (error) {
          console.log(error);
        }
      }

      setPokemonList(fullList);
      setFilteredPokemon(fullList);
    }

    setPokemonTypes(Object.keys(typeColors));
    fetchPokemonApi();
  }, []);

  function filterPokemon(type) {
    if (type) {
      const filteredList = pokemonList.filter((pokemon) =>
        pokemon.types.includes(type),
      );

      setFilteredPokemon(filteredList);
    }
  }

  function clearFilters() {
    setFilteredPokemon(pokemonList);
  }

  if (!pokemonList.length) {
    return (
      <div className="main-content">
        <LoadingScreen />
      </div>
    );
  }

  return (
    <div className="main-content">
      <PokemonFilters
        pokemonTypes={pokemonTypes}
        filterPokemon={filterPokemon}
        clearFilters={clearFilters}
      />

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
