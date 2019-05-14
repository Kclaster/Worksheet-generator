
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import {helperSaveQuickQuestion} from '../../../redux/actions'

class QuickQuestion extends React.Component {
  constructor() {
    super();
    this.state = {
      question: null
    };
  }

  getOneQuestion = () => {
    axios.get(`/slope_intercept/one?min=0&max=30`).then(res => {
      this.setState({ question: res.data });
    });
  };

    componentDidMount() {
        this.getOneQuestion();
    }

    handleNewQuestion=()=>{
        this.getOneQuestion();
}

handleSavedQuickQuestion = () =>{
  const { question, answer } = this.state.question;
  this.props.helperSaveQuickQuestion({question, answer})
}

  render() {
    console.log(this.state.question);
    return (
      <div>
        <Typography variant="h4" component="h4">
          Quick Question
        </Typography>
        <Paper className="quickQuestions-container">
          <Typography variant="p" component="p">
            Equation:
          </Typography>
          {this.state.question && <h1>{this.state.question.question}</h1>}
          <Typography variant="p" component="p">
            Answer:
          </Typography>
          {this.state.question && <h1>{this.state.question.answer}</h1>}
        </Paper>
        <br></br>
        <Button
          variant="contained"
          color="secondary"
          onClick={this.handleNewQuestion}
        >
          Update Equation
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={this.handleClickSaveButton}
        >
          Save Equation
        </Button>
      </div>
    );

    
}
}

const mapStateToProps = (state) => {
    return {
        question: state.question
    }
}

export default connect(mapStateToProps, {helperSaveQuickQuestion})(QuickQuestion);
