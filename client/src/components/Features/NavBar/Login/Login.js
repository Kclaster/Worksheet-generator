//Needs to connect to userpage/index.js

import React from "react";
import "./Login.css";
import MainPages from "../../../MainPages";

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
          <div class="form-group">
            <label>Email</label>
            <br />
            <input type="text" class="form-control" name="username" />
          </div>
          <div class="form-group">
            <label>Password</label>
            <br />
            <input type="text" class="form-control" name="password" />
          </div>
        </form>
        <div>{this.state.displayUserPage ? <Login /> : <MainPages />}</div>
      </div>
      
    );
  }
}

export default Login;
