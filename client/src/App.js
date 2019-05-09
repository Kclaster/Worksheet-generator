import React from "react";
import MainPages from "./components/MainPages";
import NavBar from "./components/Features/NavBar/NavBar.js";
import Footer from "./components/Features/Footer/Footer.js";
import Login from "./components/Features/NavBar/Login/Login";
import ParticlesCustom from "./components/Particles";

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
        <Login />
        <br />
        <Footer />
        <ParticlesCustom />
      </div>
    );
  }
}

export default App;
