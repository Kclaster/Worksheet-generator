//Needs to connect to userpage/index.js

import React from "react";
import "./Login.css";
import MainPages from "../../../MainPages";
import HomePage from "../../../MainPages/HomePage/HomePage";
import UserPage from "../../../MainPages/UserPage";
import { GoogleLogin } from "react-google-login-component";

class Login extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      displayUserPage: false
    };
  }

  handleClick = () => {
    this.setState({ displayUserPage: !this.state.displayUserPage });
  };

  responseGoogle(googleUser) {
    var id_token = googleUser.getAuthResponse().id_token;
    var googleId = googleUser.getId();

    console.log({ googleId });
    console.log({ accessToken: id_token });
    //anything else you want to do(save to localStorage)...
  }

  render() {
    return (
      <div className="loginbox">
        <GoogleLogin
          socialId="1073244498652-n2m4u3fru7io3pncs484c72qh35sp1u4.apps.googleusercontent.com"
          className="google-login"
          scope="profile"
          prompt="select_account"
          fetchBasicProfile={false}
          responseHandler={this.responseGoogle}
          buttonText="Login With Google"
          onClick={this.handleClick}
        />
        <button type="submit" onClick={this.handleClick}>
          Test Switch
        </button>
        {this.state.displayUserPage ? <UserPage /> : <HomePage />}
      </div>
    );
  }
}

export default Login;
