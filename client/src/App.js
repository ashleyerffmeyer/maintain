import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import Home from './pages/home';
import SimpleMap from './pages/map';
import Journal from './pages/journal';
import Callback from "./pages/Callback";
import Auth from "./Auth/Auth";
import Nav from "./components/Nav";

import './App.css';

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
          <Route path="/" exact render={Home} />
          <Route path="/map" exact render={(props) => <SimpleMap {...props} />} />
          <Route
            path="/callback"
            render={(props) => <Callback auth={this.auth} {...props} />}
          />
          <Route
            path="/journal"
            render={(props) => {
              return this.auth.isAuthenticated()
                ? <Journal auth={this.auth} {...props} />
                : <Redirect to="/" />
            }}
          />
        </div>
      </>
    );
  }
}

export default App;
