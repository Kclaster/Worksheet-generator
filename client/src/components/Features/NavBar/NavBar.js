import React from "react";
import Login from "./Login/Login.js";
import "./index.css";
import AboutContainer from "../../MainPages/HomePage/AboutContainer/AboutContainer";
import HomePage from "../../MainPages/HomePage/homePage.js";

class NavBar extends React.Component {
  constructor() {
    super();
    this.state = {
      displayUserPage: false
    };
  }

  render() {
    return (
      <div>
        <section>
          
          <ul className ="header">
            <li>
            <Login />
          </li>
          </ul>
        </section>

        <section>
          <HomePage />
        </section>
      </div>
    );
  }
}

export default NavBar;
