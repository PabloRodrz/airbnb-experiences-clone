import React from 'react'

function Hero() {
  return (
    <div className="hero-container">
      <img className='heroimg' src={window.location.origin + '/images/photo-grid.png'} alt="hero-img" />
      <div className='herotext-container'>
        <h1>Online experiences</h1>
        <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
        </p>
      </div>
    </div>
  )
}

export default Hero