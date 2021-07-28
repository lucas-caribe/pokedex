import React from 'react';

import './style.css';

function LoadingScreen() {
  return (
    <div className="loading-container">
      <img src="./assets/loading.gif" alt="Pikachu" style={{ width: '20em' }} />
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
