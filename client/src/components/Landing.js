import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";

class Landing extends Component {
  render() {
    return (
      <div className="container">
        <div className="jumbotron mt-5">
          <div className="col-sm-8 mx-auto">
            <Typography component="h1" variant="h1">
              WELCOME
            </Typography>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
