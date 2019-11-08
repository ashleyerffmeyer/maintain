import React, { Component } from "react";

class LoginButton extends Component {
  render() {
    const { login } = this.props.auth;
    return <button onClick={login}>Log In</button>;
  }
}



export default Login