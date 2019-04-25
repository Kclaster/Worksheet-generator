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
          <button onClick={this.handleClick}>User Home Page</button>
        </div>

        {this.state.displayUserPage ? <HomePage /> : <UserPage />}
      </div>
    );
  }
}

export default MainPage;
