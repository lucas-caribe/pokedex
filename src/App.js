import React, { useContext } from 'react';

import PokemonContext from './context/PokemonContext';

import Pokedex from './components/Pokedex/';
import Header from './components/Header/';
import Footer from './components/Footer/';

import './App.css';

function App() {
  const { isFetching } = useContext(PokemonContext);

  return (
    <div className="App">
      {!isFetching && <Header />}
      <Pokedex />
      <Footer />
    </div>
  );
}

export default App;
