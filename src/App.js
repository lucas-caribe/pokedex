import React from 'react';

import Pokedex from './components/Pokedex/';
import Header from './components/Header/';
import Footer from './components/Footer/';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Pokedex />
      <Footer />
    </div>
  );
}

export default App;
