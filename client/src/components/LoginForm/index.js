import React from "react";
import avatar from "../../assets/avatar.png";

import "./style.css";

function LoginForm() {
  return (
    <div>

      <div className="profile login">
        <img className="loginicon" src={avatar} alt="avatar"></img>
        <form>
          <div className="login-form">
            <label className="emailtext" for="email">Email</label>
            <input type="email" className="email-input" placeholder="Enter email" />
          </div>
          <div className="login-form">
            <label className="passwordtext" for="password">Password</label>
            <input type="password" className="password-input" placeholder="Password" />
          </div>
          <div className="login-form form-check">
            <p className="regtext"> <a href="/">No account? Create one here!</a></p>
          </div>
          <button type="submit" className="btn btn-primary submitbtn">Login</button>
        </form>
      </div>

    </div>

  );
}
export default LoginForm;
