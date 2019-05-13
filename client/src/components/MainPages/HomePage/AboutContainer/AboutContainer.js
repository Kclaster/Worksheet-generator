import React from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

class AboutContainer extends React.Component {
  render() {
    return (
      <Paper className="About">
        <br />
        <Typography component="h2" variant="h2">
        Welcome to Worksheet Generator
        </Typography>
        <Typography component="p" variant="p">
          This app was built for the time-strapped teacher. The type of teacher
          who wants to do more than asked but is confined by time. With our
          Worksheet Generator, you can produce thousands of worksheets with a
          few clicks!
        </Typography>
        <br />
        <Typography component="p" variant="p">
          Choose the math level, number of questions and other variables.
          Worksheets are numbered and answers are a click away! Make 10 of the
          same, make 100 different ones. What took hours now takes seconds!
        </Typography>
        <br />
      </Paper>
    );
  }
}

export default AboutContainer;
