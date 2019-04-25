import React from "react";
import Login from "./Login/Login.js";
import "./index.css";

class NavBar extends React.Component {
  constructor() {
    super();
    this.state = {
      displayUserPage: false
    };
  }

  render() {
    return (
      <section>
        <ul className="header">
          <li>
            <Login />
          </li>
        </ul>
      </section>
    );
  }
}

export default NavBar;
