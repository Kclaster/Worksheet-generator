// import React from "react";
// import MainPages from "./components/MainPages";
// import NavBar from "./components/Features/NavBar/NavBar.js";
// import Footer from "./components/Features/Footer/Footer.js";
// import Login from "./components/Features/NavBar/Login/Login"

// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       displayUserPage: false
//     };
//   }

//   handleClick = () => {
//     this.setState({ displayUserPage: !this.state.displayUserPage });
//   };

//   render() {
//     return (
//       <div>
//         <section>
//           <Login />
          
//         </section>
//         <footer>
//           <Footer />
//         </footer>
//       </div>
//     );
//   }
// }

// export default App;



import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Navbar from './components/NavBar'
import Landing from './components/Landing'
import Login from './components/Login'
import Register from './components/Register'
import Profile from './components/Profile'

class App extends Component {
  render () {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Landing} />
          <div className="container">
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/profile" component={Profile} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;