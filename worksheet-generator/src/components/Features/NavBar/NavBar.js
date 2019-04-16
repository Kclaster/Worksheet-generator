import React from 'react';
import Login from './Login/Login.js'
import './index.css'



class NavBar extends React.Component{
    render(){
        return (
            <div className='NavBar'>
            This is the NavBar Main
            <Login />
            
            </div>
        )
    }
}

export default NavBar;