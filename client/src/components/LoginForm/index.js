import React from "react";
import avatar from "../../assets/avatar.png";

import "./style.css";

function LoginForm() {
  return (
    <div>

      <div className="profile login">
        <img class="loginicon" src={avatar} alt="avatar"></img>
        <form>
          <div className="login-form">
            <label class="emailtext" for="email">Email</label>
            <input type="email" class="email-input" placeholder="Enter email" />
          </div>
          <div className="login-form">
            <label class="passwordtext" for="password">Password</label>
            <input type="password" class="password-input" placeholder="Password" />
          </div>
          <div class="login-form form-check">
            <p class="regtext"> <a href="#">No account? Create one here!</a></p>
          </div>
          <button type="submit" class="btn btn-primary submitbtn">Login</button>
        </form>
      </div>

    </div>

  );
}
export default LoginForm;
