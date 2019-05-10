import React from "react";
import "./AboutContainer.css";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

class AboutContainer extends React.Component {
  render() {
    return (
      <Paper className="About">
        <Typography variant="h5" component="h5">
          Please login to continue to the Worksheet Generator App!
        </Typography>
        <br></br>
        <Typography component="p">
          This app was built for the time-strapped teacher. The type of teacher
          who wants to do more than asked but is confined by time. With our
          Worksheet Generator, you can produce thousands of worksheets with a
          few clicks!
        </Typography>
        <br />
        <Typography component="p">
          Choose the math level, number of questions and other variables.
          Worksheets are numbered and answers are a click away! Make 10 of the
          same, make 100 different ones. What took hours now takes seconds!
        </Typography>
      </Paper>
    );
  }
}

export default AboutContainer;
