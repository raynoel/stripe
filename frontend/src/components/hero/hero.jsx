// Image d'un gars avec une inscription centrée et un bouton dessous 
// Utilise le layout du Hero de bulma => https://bulma.io/documentation/layout/hero/
import React from 'react';
import './hero.scss';

const Hero = () => {
  return (
    <section className="hero-image hero is-large is-info">
      <div className="hero-body">
        <p className="hero-title">Bags reimagined for modern life.</p>
        <div className='shop-now-btn'>
          <button className='button is-black' id='shop-now'>SHOP NOW</button>
        </div>
      </div>
    </section>
  );
}

export default Hero; 