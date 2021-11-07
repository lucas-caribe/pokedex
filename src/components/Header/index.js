import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';

import PokemonFilters from '../PokemonFilters';

import './styles.css';

function Header() {
  const [visible, setVisible] = useState(false);

  return (
    <header>
      <img src="/pokedex/assets/pokemon-logo.png" alt="Pokemon Logo" />
      {!visible && (
        <GiHamburgerMenu
          className="filter-icon"
          onClick={() => setVisible(!visible)}
        />
      )}
      <PokemonFilters visible={visible} setVisible={setVisible} />
    </header>
  );
}

export default Header;
