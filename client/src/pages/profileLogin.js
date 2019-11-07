import React, { Component } from "react";
import { Link } from "react-router-dom";
import PageWrapper from '../components/PageWrapper';

class LOGIN extends Component {
  render() {
    const { isAuthenticated, login } = this.props.auth;
    return (
     
      <div>
        <h1>profile</h1>
        {isAuthenticated() ? (
          <Link to="/journal">View journal</Link>
        ) : (
     
         <button onClick={login}>Log In</button>
         
        )}
      </div>
      
    );
  }
}



export default LOGIN