import React from "react";

function LoginButton (props) {
  if (!props.auth) { return null }

  const { login, logout, isAuthenticated } = props.auth;
  return (
    isAuthenticated()
      ? <button className="logbutton" onClick={logout}>Log Out</button>
      : <button className= "logbutton" onClick={login}>Log In</button>
  )
}

export default LoginButton