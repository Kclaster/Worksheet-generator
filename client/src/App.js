// import React from "react";
// import MainPages from "./components/MainPages";
// import NavBar from "./components/Features/NavBar/NavBar.js";
// import NavBarLogin from "./components/NavBarLogin.js";
// import Footer from "./components/Features/Footer/Footer.js";
// import Login from "./components/Features/NavBar/Login/Login";
// //import { BrowserRouter as Router, Route } from 'react-router-dom';
// import Profile from './components/Profile';

// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       displayUserPage: false
//     };
//   }

//   handleClick = () => {
//     this.setState({ displayUserPage: !this.state.displayUserPage });

//     // handleClick = () => {localStorage.usertoken ? userLink : loginRegLink}
//   };

//   render() {
//     return (
      
//       <div>
//         <section>
        
//           <Login />
//           {/* <NavBarLogin /> */}
//           {/* <Profile /> */}
//           {/* <NavBar /> */}
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
import { BrowserRouter, Route } from 'react-router-dom'
import Landing from "./components/Landing";
import NavBar from "./components/Features/NavBar/NavBar.js";
import Footer from "./components/Features/Footer/Footer.js";



class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <Route exact path="/" component={Landing} />
          <div className="container">
            {/* <Route exact path="/profile" component={Profile} /> */}
            {/* <Route exact path="/login" component={Login} />
            <Route exact path="/profile" component={Profile} /> */}
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;