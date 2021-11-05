import React from 'react';
import ReactDOM from 'react-dom';

import PokemonProvider from './context/PokemonProvider';

import App from './App';

import './index.css';

ReactDOM.render(
  <PokemonProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </PokemonProvider>,
  document.getElementById('root'),
);
