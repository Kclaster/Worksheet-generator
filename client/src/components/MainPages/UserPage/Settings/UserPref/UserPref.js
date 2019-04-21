import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './UserPref.css'


class UserPref extends React.Component {
    constructor() {
        super();
        this.state = {
            userName: '',
            userEmail: '',
            teachingLevel: '',
            numberOfStudents: 0,
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
                <h1>User Setting</h1>
                <form className = 'user-settings'>
                    <div className="userName">
                        <TextField
                            id="outlined-name"
                            label="Name"
                            name='userName'
                            value={this.state.userName}
                            onChange={this.handleChange}
                            margin="normal"
                            variant="outlined"
                            fullWidth
                        />
                    </div>
                    <div className="userEmail">
                        <TextField
                            id="outlined-name"
                            label="Email"
                            name='userEmail'
                            value={this.state.userEmail}
                            onChange={this.handleChange}
                            margin="normal"
                            variant="outlined"
                            fullWidth
                        />
                    </div>
                    <div className="teachingLevel">
                        <TextField
                            id="outlined-name"
                            label=" What do you teach?"
                            name= 'teachingLevel'
                            value={this.state.teachingLevel}
                            onChange={this.handleChange}
                            margin="normal"
                            variant="outlined"
                            fullWidth
                        />
                    </div>
                    <div className="numberOfStudents">
                        <TextField
                            id="outlined-number"
                            label="Number of students?"
                            name= 'numberOfStudents'
                            value={this.state.numberOfStudents}
                            onChange={this.handleChange}
                            type="number"
                            fullWidth
                            InputLabelProps={{
                                shrink: true,
                            }}
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
                Save
            </Button>
                    </div>


                </form>
            </div>
        )
    }
}

export default UserPref;