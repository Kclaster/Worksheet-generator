// import React from "react";
// import axios from "axios";
// import Button from "@material-ui/core/Button";
// import Paper from "@material-ui/core/Paper";
// import Typography from "@material-ui/core/Typography";
// import Divider from '@material-ui/core/Divider';
// External Dependencies
import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

// Internal Dependencies
import './QuickQuestion.css';
import { setSavedQuestion } from '../../redux/actionCreators';

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

  handleClickSaveButton = () => {
    this.props.setSavedQuestion(this.state.question);
  };

  render() {
    console.log(this.state.question);
    return (
      <div>
        <h1>Quick Question</h1>
        <div className="quickQuestions-container">
          Equation:
          {this.state.question && <h1>{this.state.question.question}</h1>}
          Answer:{this.state.question && <h1>{this.state.question.answer}</h1>}
        </div>
        <button onClick={this.handleNewQuestion}>Update Equation</button>
        <button onClick={this.handleClickSaveButton}>Save Equation</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    questions: state.savedQuestions
  };
};

export default connect(
  mapStateToProps,
  { setSavedQuestion }
)(QuickQuestion);
