import React from 'react';

import './style.css';

function LoadingScreen() {
  return (
    <div className="loading-container">
      <img src="/pokedex/assets/loading.gif" alt="Pikachu" />
      <p>
        Loading
        <span>.</span>
        <span>.</span>
        <span>.</span>
      </p>
    </div>
  );
}

export default LoadingScreen;
