import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './routes/Home';
import Footer from './components/Footer';
import HistoryChart from './components/HistoryChart';

// function App() {
//   return (
//     <div className="App">
//       <Navbar />
//       <Home />
//       <Footer />
//     </div>
//   );
// }

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/historychart" exact component={HistoryChart} />
        <Route render={() => <h1>404 Not found</h1>} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
