
//import logo from './logo.svg';
import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import './App.css';
import Home from './pages/home';
import SimpleMap from './pages/map';
import Journal from './pages/journal';
import LOGIN from './pages/profileLogin';
import Callback from "./pages/Callback";
import Auth from "./Auth/Auth";
import Nav from "./components/Nav";


class App extends Component {
  constructor(props) {
    super(props);
    this.auth = new Auth(this.props.history);
  }
  render() {
  return (

<>
<Nav auth={this.auth} />
<div className="body">
<Route
    path="/"
    exact
    render={props => <Home  {...props} />}
  />
  <Route
    path="/map"
    exact
    render={props => <SimpleMap {...props} />}
  />
  <Route
    path="/profileLogin"
    exact
    render={props => <LOGIN auth={this.auth} {...props} />}
  />
  <Route
    path="/callback"
    render={props => <Callback auth={this.auth} {...props} />}
  />
  <Route
    path="/journal"
    render={props =>
      this.auth.isAuthenticated() ? (
        <Journal auth={this.auth} {...props} />
      ) : (
        <Redirect to="/profileLogin" />
      )
    }
  />
</div>
</>
  
 
  );
}
}

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

export default App;
