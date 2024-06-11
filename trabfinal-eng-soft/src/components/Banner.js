import React from 'react';
import './Banner.css';

const Banner = () => {
  return (
    <div className="banner-section">
      <div className="banner large">
        <h2>Build memories</h2>
        <button>Shop toys</button>
      </div>
      <div className="banner small">
        <h2>Roll on: bikes & more</h2>
        <button>Shop now</button>
      </div>
      <div className="banner small">
        <h2>Get crafty with tie-dye & more</h2>
        <button>Shop now</button>
      </div>
      <div className="banner small">
        <h2>Let’s e-learn</h2>
        <button>Shop tablets</button>
      </div>
      <div className="banner small">
        <h2>Splash. Play. Yay!</h2>
        <button>Shop now</button>
      </div>
    </div>
  );
}

export default Banner;
