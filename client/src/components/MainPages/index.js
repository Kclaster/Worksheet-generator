import React from "react";
import HomePage from "./HomePage/homePage.js";
import UserPage from "./UserPage";
import "./index.css";

class MainPage extends React.Component {
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
      <div>
        <div>
          <button type= "submit" onClick={this.handleClick}>Login</button>
        </div>

        {this.state.displayUserPage ? <UserPage /> : <HomePage />}
      </div>
    );
  }
}

export default MainPage;
