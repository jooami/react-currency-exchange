import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import React from 'react';
import Navbar from './components/Navbar.js';
import CurrencyConverter from './components/CurrencyConverter';
import Footer from './components/Footer.js';

function App() {
  return (
    <div className="App">
      <Navbar />
      <CurrencyConverter />
      <Footer />
    </div>
  );
}

export default App;
