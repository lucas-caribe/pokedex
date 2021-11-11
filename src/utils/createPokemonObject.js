const createPokemonObject = (pokemonData) => {
  const { id, name, height, weight, sprites, types, stats } = pokemonData;
  const typeNames = types.map((type) => type.type.name);

  return {
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
  };
};

export default createPokemonObject;
