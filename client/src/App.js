import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Home from './pages/home';
import SimpleMap from './pages/map';
import JOURNAL from './pages/journal';
import LOGIN from './pages/profileLogin';

import {
  BrowserRouter as Router,
  Switch,
  Route,
 // Link
} from 'react-router-dom';


function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact name='home' component={Home} />
        <Route path='/map' exact name='map' component={SimpleMap} />
        <Route path='/journal' exact name='journal' component={JOURNAL} />
        <Route path='/profileLogin' exact name='journal' component={LOGIN} />
      </Switch>
    </Router>

    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
