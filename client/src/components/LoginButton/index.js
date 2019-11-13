import React from "react";


function LoginButton (props) {
  if (!props.auth) { return null }

  const { login, logout, isAuthenticated } = props.auth;
  return (
    isAuthenticated()
      ? <button class="logbutton" onClick={logout}>Log Out</button>
      : <button class= "logbutton" onClick={login}>Log In</button>
  )
}

export default LoginButton