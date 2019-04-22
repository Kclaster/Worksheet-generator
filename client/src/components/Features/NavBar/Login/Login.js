import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './Login.css'
// import HomePage from '../../../MainPages/HomePage/homePage'
// import UserPage from '../../../MainPages/UserPage/index'



class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            userName: '',
            userEmail: '',
        };
    }

    handleChange = event => {
        const target = event.target.value;
        const name = event.target.name;
        this.setState({
            [name]: target
        });
        console.log(name)
    };



    render() {
        return (
            <div>
                <h3>Login</h3>
                <form className = 'user-login-name'>
                    <div className="userName">
                        <TextField className="textfield"
                            id="outlined-name"
                            label="Name"
                            name='userName'
                            value={this.state.userName}
                            onChange={this.handleChange}
                            margin="normal"
                            variant="outlined"
                        />
                    </div>
                    <div className="user-login-email">
                        <TextField className="textfield"
                            id="outlined-name"
                            label="Email"
                            name='userEmail'
                            value={this.state.userEmail}
                            onChange={this.handleChange}
                            margin="normal"
                            variant="outlined"
                        />
                    </div>
                    <div>
                    <Button
                variant="contained"
                onClick={this.handleSubmit}
                className="submit-btn"
                type="submit"
                value="Save"
              >
                Login
            </Button>
                    </div>


                </form>
            </div>
        )
    }
}

export default Login;