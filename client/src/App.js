import React from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/home';
import LoginForm from './components/LoginForm';

function App() {
  return (
    <div >
      {/* If you are wanting to load in a particular component to see how it looks uncomment them out in the function and import */}
      <Nav />
      <LoginForm />
      <Footer />
    </div>

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
