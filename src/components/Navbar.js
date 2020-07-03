import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand navbar-dark">
      <a className="navbar-brand" href="localhost:3000">
        ExchangeRates
      </a>
      <div className="navbar-nav">
        <a className="nav-item nav-link active" href="localhost:3000">
          Converter <span className="sr-only">(current)</span>
        </a>
        <a className="nav-item nav-link active" href="localhost:3000">
          Base Rates
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
