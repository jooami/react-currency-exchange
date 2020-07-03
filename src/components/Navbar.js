import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand navbar-dark">
      <a className="navbar-brand" href="/">
        ExchangeRates
      </a>
      <div className="navbar-nav">
        <a className="nav-item nav-link pb-1 active" href="/historychart">
          Historical Data <span className="sr-only">(current)</span>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
