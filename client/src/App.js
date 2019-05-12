import Footer from "./components/Features/Footer/Footer.js";
import ParticlesCustom from "./components/Particles";
import AboutContainer from "./components/MainPages/HomePage/AboutContainer/AboutContainer";
import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Landing from "./components/Landing";
import NavBar from "./components/Features/NavBar/NavBar.js";
import LoginJwt from "./components/Features/NavBar/LoginJwt/Login";
import Profile from "./components/Features/NavBar/Profile";
import Register from "./components/Features/NavBar/Register/Register";

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div className="App">
            <NavBar />
            <Route exact path="/" component={Landing} />
            <div className="container">
              <Route exact path="/login" component={LoginJwt} />
              <Route exact path="/Register" component={Register} />
              <Route exact path="/profile" component={Profile} />
            </div>
            <AboutContainer />
            <Footer />
            <ParticlesCustom />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
