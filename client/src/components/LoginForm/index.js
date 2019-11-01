import React from "react";


import "./style.css";

function LoginForm () {
    return (
        <div>

            <div className= "profile login">
        <form>
                <div className="login-form">
                  <label for="email">Email address</label>
                  <input type="email" class="email-input" placeholder="Enter email"/>
                </div>
                <div className="login-form">
                  <label for="password">Password</label>
                  <input type="password" class="password-input" placeholder="Password"/>
                </div>
                <div class="login-form form-check">
                    <p> <a href="#">Not registered? Create an account here!</a></p>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
              </form>
</div>

        </div>

    );
}
export default LoginForm;