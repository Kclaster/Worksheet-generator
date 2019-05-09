import React from "react";
import axios from "axios";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Divider from '@material-ui/core/Divider';

class QuickQuestion extends React.Component {
  constructor() {
    super();
    this.state = {
      question: null
    };
  }

  getOneQuestion = () => {
    axios.get(`/slope_intercept/one?min=-0&max=30`).then(res => {
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
        <br></br><br></br>
        <Typography variant="h4" component="h4">
          Quick Question
        </Typography>
        <Paper className="quickQuestions-container">
          <Typography variant="p" component="p">
            Equation:
          </Typography>
          <Divider />
          {this.state.question && <h1>{this.state.question.question}</h1>}
          <Typography variant="p" component="p">
            Answer:
          </Typography>
          <Divider />
          {this.state.question && <h1>{this.state.question.answer}</h1>}
        </Paper>

        <Button
          onClick={this.handleNewQuestion}
          variant="contained"
          color="secondary"
        >
          Update Equation
        </Button>
        <Button variant="contained" color="secondary">
          Save Equation
        </Button>
      </div>
    );
  }
}

export default QuickQuestion;
