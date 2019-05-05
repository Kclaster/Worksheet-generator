import React from "react";
import "./AboutContainer.css";

class AboutContainer extends React.Component {
  render() {
    return (
      <div className="About">
        <h1>Please login to continue to the Worksheet Generator App!</h1>
        <p>
          This app was built for the time-strapped teacher. The type of teacher
          who wants to do more than asked but is confined by time. With our
          Worksheet Generator, you can produce thousands of worksheets with a
          few clicks!
        </p>
        <p>
          Choose the math level, number of questions and other variables.
          Worksheets are numbered and answers are a click away! Make 10 of the
          same, make 100 different ones. What took hours now takes seconds!
        </p>
      </div>
    );
  }
}

export default AboutContainer;
