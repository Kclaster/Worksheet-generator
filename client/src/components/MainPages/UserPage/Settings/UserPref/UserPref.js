import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button';
import "./UserPref.css";
// import Button from "../../../../../components/Buttons.js";

class UserPref extends React.Component {
  constructor() {
    super();
    this.state = {
      userName: "",
      userEmail: "",
      teachingLevel: "",
      numberOfStudents: 0
    };
  }

  handleChange = event => {
    const target = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: target
    });
    console.log(name);
  };

  // handleSubmit = event => {
  //     event.preventDefault();
  //     let userid = this.props.userid;
  //     let { userName, userEmail, teachingLevel, numberOfStudents } = this.state;
  //     let post = {
  //       userid,
  //       userName,
  //       userEmail,
  //       teachingLevel,
  //       numberOfStudents
  //     };
  //     this.props.updateUserPref(post);
  //     saveUserPref(post);
  //     this.setState({
  //         userName: '',
  //         userEmail: '',
  //         teachingLevel: 0,
  //         numberOfStudents: 0,
  //     });
  //   };

  render() {
    return (
      <div>
        <h1>User Setting</h1>
        <form className="user-settings">
          <div className="userName">
            <TextField
              id="outlined-name"
              label="Name"
              name="userName"
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
              name="userEmail"
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
              name="teachingLevel"
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
              name="numberOfStudents"
              value={this.state.numberOfStudents}
              onChange={this.handleChange}
              type="number"
              fullWidth
              InputLabelProps={{
                shrink: true
              }}
              margin="normal"
              variant="outlined"
            />
          </div>
          <div>
            <Button
              variant="contained"
              color="primary"
              onClick={this.handleSubmit}
              className="submit-btn"
              type="submit"
              value="Save"
            >Save</Button>
          </div>
        </form>
      </div>
    );
  }
}

export default UserPref;
