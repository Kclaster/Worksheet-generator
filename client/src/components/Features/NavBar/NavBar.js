import React from 'react';
import Login from './Login/Login.js'
import './index.css'



class NavBar extends React.Component {
    constructor() {
      super();
      this.state = {
          displayUserPage: false,
      }
  }
    
    
    render() {
        return (
            <div>
              <ul className="header">
                <li><a href="/">Home</a></li>
                <li><a href="/user">User Page</a></li>
                <li><Login /></li>

              </ul>
            </div>
        );
      }
    }
     
    export default NavBar;