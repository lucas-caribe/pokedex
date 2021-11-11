// offset - https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20
// by type - https://pokeapi.co/api/v2/type/{name or id}/

import createPokemonObject from '../utils/createPokemonObject';

const BASE_URL = 'https://pokeapi.co/api/v2';
const POKEMON_LIMIT = 50;
const FIRST_PAGE = `${BASE_URL}/pokemon/?offset=0&limit=${POKEMON_LIMIT}`;

const createPokemonList = async (results) => {
  const pokemon = [];

  for (let i = 0; i < results.length; i++) {
    const url = results[i].pokemon ? results[i].pokemon.url : results[i].url;
    const pokemonResponse = await fetch(url);
    const pokemonData = await pokemonResponse.json();

    pokemon.push(createPokemonObject(pokemonData));
  }

  return pokemon;
};

export const fetchPokemon = async (page = FIRST_PAGE) => {
  try {
    const response = await fetch(page);
    const { results, next } = await response.json();

    return [await createPokemonList(results), next];
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const fetchPokemonByType = async (type) => {
  try {
    const response = await fetch(`${BASE_URL}/type/${type}`);
    const { pokemon: results } = await response.json();

    return await createPokemonList(results);
  } catch (error) {
    console.log(error);
    return [];
  }
};
