import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import Home from './routes/Home';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
