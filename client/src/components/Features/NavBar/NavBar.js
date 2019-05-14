import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import HomePage from "../../MainPages/HomePage/HomePage";
import Button from "@material-ui/core/Button";
// import Typography from "@material-ui/core/Typography";
import "../NavBar/NavBar.css";

class NavBarLogin extends Component {
  logOut(e) {
    e.preventDefault();
    // removes token from browser
    localStorage.removeItem("usertoken");
    this.props.history.push(`/`);
  }

  render() {
    const loginRegLink = (
      <ul className="navbar-nav">
        <Button variant="contained"className="nav-item">
          <Link
            to="/login"
            className="nav-link"
            component="button"
            variant="body2"
          >
            Login
          </Link>
        </Button>
        <Button variant="contained" className="nav-item">
          <Link
            to="/register"
            className="nav-link"
            component="button"
            variant="body2"
          >
            Register
          </Link>
        </Button>
      </ul>
    );
    const userLink = (
      <ul className="navbar-nav">
        <Button variant="contained" className="nav-item">
          <Link
            to="/profile"
            className="nav-link"
            component="button"
            variant="body2"
          >
            User
          </Link>
        </Button>
        <Button variant="contained"  className="nav-item">
          <a href="" onClick={this.logOut.bind(this)} className="nav-link">
            Logout
          </a>
        </Button>
      </ul>
    );

    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded">
          <div
            className="collapse navbar-collapse justify-content-md-center"
            id="navbar1"
          >
            <ul className="navbar-nav">
              <Button variant="contained" className="nav-item">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </Button>
            </ul>
            {localStorage.usertoken ? userLink : loginRegLink}
          </div>
        </nav>

        {/* home page */}
        <HomePage />
      </div>
    );
  }
}

export default withRouter(NavBarLogin);
