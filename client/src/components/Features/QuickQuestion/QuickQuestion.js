import React from "react";
// import "./QuickQuestion.css";
import axios from "axios";
// import Button from '../../Buttons'
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

class QuickQuestion extends React.Component {
  constructor() {
    super();
    this.state = {
      question: null
    };
  }

  getOneQuestion = () => {
    axios.get(`/slope_intercept/one?min=-0&max=30`).then(res => {
      // console.log(res)
      this.setState({ question: res.data });
    });
  };

  componentDidMount() {
    this.getOneQuestion();
  }

  handleNewQuestion = () => {
    this.getOneQuestion();
  };

  render() {
    console.log(this.state.question);
    return (
      <div>
        <Typography variant="h4" component="h4">
          Quick Question
        </Typography>
        <Paper className="quickQuestions-container">
          <Typography variant="h5" component="h5">
            Equation:
          </Typography>
          {this.state.question && <h1>{this.state.question.question}</h1>}
          <Typography variant="h5" component="h5">
            Answer:
          </Typography>
          {this.state.question && <h1>{this.state.question.answer}</h1>}
        </Paper>

        <Button
          onClick={this.handleNewQuestion}
          variant="contained"
          color="primary"
        >
          Update Equation
        </Button>
        <Button variant="contained" color="primary">
          Save Equation
        </Button>
      </div>
    );
  }
}

export default QuickQuestion;
