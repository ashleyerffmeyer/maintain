import React from "react";

function LoginButton (props) {
  if (!props.auth) { return null }

  const { login, logout, isAuthenticated } = props.auth;
  return (
    isAuthenticated()
      ? <button onClick={logout}>Log Out</button>
      : <button onClick={login}>Log In</button>
  )
}

export default LoginButton