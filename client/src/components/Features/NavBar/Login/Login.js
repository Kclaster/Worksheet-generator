//Needs to connect to userpage/index.js

import React from "react";
import "./Login.css";
// import MainPages from "../../../MainPages";
import HomePage from "../../../MainPages/HomePage/homePage";
import UserPage from "../../../MainPages/UserPage";

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      displayUserPage: false
    };
  }

  handleClick = () => {
    this.setState({ displayUserPage: !this.state.displayUserPage });
  };

  render() {
    return (
      <div className="loginbox">
        <form action="/login" method="post">
          <div className="form-group">
            <label>Email</label>
            <br />
            <input type="text" className="form-control" name="username" />
          </div>
          <div className="form-group">
            <label>Password</label>
            <br />
            <input type="text" className="form-control" name="password" />
          </div>
        </form>
        <div>
          <button type="submit" onClick={this.handleClick}>
            Login Button
          </button>
          <button type="register">Register</button>
        </div>

        {this.state.displayUserPage ? <UserPage /> : <HomePage />}
      </div>
    );
  }
}

export default Login;
