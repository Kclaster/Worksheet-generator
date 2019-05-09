import React from "react";
// import MainPages from "./components/MainPages";
import NavBar from "./components/Features/NavBar/NavBar.js";
import Footer from "./components/Features/Footer/Footer.js";
import Login from "./components/Features/NavBar/Login/Login";
import ParticlesCustom from "./components/Particles";

import Footer from './components/Features/Footer/Footer.js';
// import Login from './components/Features/NavBar/Login/Login';
import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import Landing from "./components/Landing";
import NavBar from "./components/Features/NavBar/NavBar.js";
import LoginJwt from "./components/Features/NavBar/LoginJwt/Login";
import Profile from './components/Features/NavBar/Profile';
import Register from './components/Features/NavBar/Register/Register';


class App extends Component {
  render () {
    return (
      <div>
        <Login />
        <br />
        <Footer />
        <ParticlesCustom />
      </div>
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <Route exact path="/" component={Landing} />
          <div className="container">  
            {/* google login */}
            {/* <Login /> */}
            
            <Route exact path="/login" component={LoginJwt} />
            <Route exact path="/Register" component={Register} />
            <Route exact path="/profile" component={Profile} />
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
