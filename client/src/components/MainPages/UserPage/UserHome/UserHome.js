import React from "react";
// import "./UserHome.css";
import QuickQuestion from "../../../Features/QuickQuestion/QuickQuestion";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

class UserHome extends React.Component {
  render() {
    return (
      <div className="userHome">
        <Typography variant="h4" component="h4">
          Jump Back In
        </Typography>
        <Paper className="worksheet-list">
          {" "}
          <Typography variant="h5" component="h5">
            Equation History:
          </Typography>
        </Paper>
        <div>
          <QuickQuestion />
        </div>
      </div>
    );
  }
}

export default UserHome;
