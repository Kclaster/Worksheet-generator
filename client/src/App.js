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
