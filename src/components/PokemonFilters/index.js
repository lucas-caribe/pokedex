import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { IoIosClose } from 'react-icons/io';

import PokemonContext from '../../context/PokemonContext';

import Button from '../Button/';

import './style.css';

function PokemonFilters({ visible, setVisible }) {
  const { pokemonTypes } = useContext(PokemonContext);

  return (
    <div className={`type-filters ${visible && 'visible'}`}>
      <div
        className="close-filters"
        onClick={() => setVisible(!visible)}
        role="button"
        tabIndex="0"
      >
        <IoIosClose />
      </div>
      <div className="buttons">
        {pokemonTypes.map((type, index) => (
          <Button key={index}>{type}</Button>
        ))}
      </div>
    </div>
  );
}

PokemonFilters.propTypes = {
  visible: PropTypes.bool.isRequired,
  setVisible: PropTypes.func.isRequired,
};

export default PokemonFilters;
