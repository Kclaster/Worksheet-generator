
import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import Landing from "./components/Landing";
import NavBar from "./components/Features/NavBar/NavBar.js";
import Footer from "./components/Features/Footer/Footer.js";
import Login from "./components/Features/NavBar/Login/Login";
import Profile from './components/Features/NavBar/Profile';
import Register from './components/Features/NavBar/Register/Register';



class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <Route exact path="/" component={Landing} />
          <div className="container">  
            <Route exact path="/login" component={Login} />
            <Route exact path="/Register" component={Register} />
            <Route exact path="/profile" component={Profile} />
          </div>
          <Footer />
        </div>
      </BrowserRouter>

import React from "react";
import MainPages from "./components/MainPages";
import NavBar from "./components/Features/NavBar/NavBar.js";
import Footer from "./components/Features/Footer/Footer.js";
import Login from "./components/Features/NavBar/Login/Login"

class App extends React.Component {
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
        <section>
          <Login />
          
        </section>
        <footer>
          <Footer />
        </footer>
      </div>
    );
  }
}

export default App;
