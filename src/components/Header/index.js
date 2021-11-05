import React from 'react';

import PokemonFilters from '../PokemonFilters';

import './styles.css';

function Header() {
  return (
    <header>
      <img src="/pokedex/assets/pokemon-logo.png" alt="Pokemon Logo" />
      <PokemonFilters />
    </header>
  );
}

export default Header;
