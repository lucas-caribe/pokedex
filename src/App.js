import React from 'react';

import PokemonProvider from './context/PokemonProvider';

import Pokedex from './components/Pokedex/';
import Header from './components/Header/';
import Footer from './components/Footer/';

import './App.css';

function App() {
  return (
    <PokemonProvider>
      <div className="App">
        <Header />
        <Pokedex />
        <Footer />
      </div>
    </PokemonProvider>
  );
}

export default App;
