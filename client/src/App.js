import React from 'react';
import MainPages from './components/MainPages'
import NavBar from './components/Features/NavBar/NavBar.js'
import Footer from './components/Features/Footer/Footer.js'

class App extends React.Component {
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
                    <NavBar />
                    <MainPages />
                </div>
                <footer>
                    <Footer />
                </footer>
            </div>
        )
    }
}

export default App;