import React from 'react'
import AboutContainer from './AboutContainer/AboutContainer.js'
import './style.css'


class HomePage extends React.Component{
    render(){
        return(
            
            <div className='HomePage'><AboutContainer/> It is inside the HomePage</div>
        )
    }
}

export default HomePage;