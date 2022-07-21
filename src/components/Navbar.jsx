import React from 'react'

function Navbar() {
  return (
    <div className="navbar-container">
      <nav>
        <img className='airbnb-logo' src={window.location.origin + '/images/airbnb-logo.png'} alt="airbnb-logo" />
      </nav>
    </div>
  )
}

export default Navbar