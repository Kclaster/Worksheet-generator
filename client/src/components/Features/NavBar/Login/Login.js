import React from "react";
import "./Login.css";
import MainPages from "../../../MainPages";
import HomePage from "../../../MainPages/HomePage/HomePage.js";
import UserPage from "../../../MainPages/UserPage";
import { GoogleLogin } from "react-google-login-component";
import Button from "@material-ui/core/Button";

class Login extends React.Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     displayUserPage: false
  //   };
  // }

  // handleClick = () => {
  //   this.setState({ displayUserPage: !this.state.displayUserPage });
  // };

  // render() {
  //   return (
  //     <div className="loginbox">
  //       <form action="/login" method="post">
  //         <div className="form-group">
  //           <label>Email</label>
  //           <br />
  //           <input type="text" className="form-control" name="username" />
  //         </div>
  //         <div className="form-group">
  //           <label>Password</label>
  //           <br />
  //           <input type="text" className="form-control" name="password" />
  //         </div>
  //       </form>
  //       <div>
  //         <button type="submit" onClick={this.handleClick}>
  //           Login Button
  //         </button>
  //         <button type="register">Register</button>
  //       </div>

  //       {this.state.displayUserPage ? <UserPage /> : <HomePage />}
  //     </div>
  //   );
  // }

  constructor(props, context) {
    super(props, context);
    this.state = {
      displayUserPage: false
    };
  }

  handleClick = () => {
    this.setState({ displayUserPage: !this.state.displayUserPage });
  };

  // responseGoogle(googleUser) {
  //   var id_token = googleUser.getAuthResponse().id_token;
  //   var googleId = googleUser.getId();

  //   console.log({ googleId });
  //   console.log({ accessToken: id_token });
  //   //anything else you want to do(save to localStorage)...
  // }

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
        <Button variant="contained" color="primary" onClick={this.handleClick}>
          Test Switch
        </Button>
        {this.state.displayUserPage ? <UserPage /> : <HomePage />}
      </div>

      /* <GoogleLogin
          clientId="1073244498652-n2m4u3fru7io3pncs484c72qh35sp1u4.apps.googleusercontent.com"
          render={renderProps => (
            <button
              onClick={renderProps.onClick}
              disabled={renderProps.disabled}
            >
              This is my custom Google button
            </button>
          )}
          buttonText="Login"
          onSuccess={this.responseGoogle}
          onFailure={this.responseGoogle}
          cookiePolicy={"single_host_origin"}
        />
      </div> */
    );
  }
}

export default Login;
