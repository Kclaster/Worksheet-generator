import React from 'react';
import HomePage from './HomePage/homePage.js'
import UserPage from './UserPage'




class MainPage extends React.Component {
    constructor() {
        super();
        this.state = {
            displayUserPage: false,
        }
    }

 
    handleClick= ()=> {
        this.setState({ displayUserPage: !this.state.displayUserPage })
    }

    render() {
        return (

            <div>
            <div>
                <button onClick={this.handleClick}>Go to UserPage</button>
        </div>

        {this.state.displayUserPage ? <HomePage /> : <UserPage />}
        </div>
        )
    }
}

export default MainPage;