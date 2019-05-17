import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
// External Dependencies
import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { helperSaveQuickQuestion } from '../../../redux/actions';

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

  handleNewQuestion = () => {
    this.getOneQuestion();
  };

  handleSavedQuickQuestion = () => {
    this.props.helperSaveQuickQuestion(this.state.question);
  };
  render() {
    return (
      <div>
        <h1>Quick Question</h1>
        <div className="quickQuestions-container">
          Equation:
          {this.state.question && <h1>{this.state.question.question}</h1>}
          Answer:{this.state.question && <h1>{this.state.question.answer}</h1>}
        </div>
        <button onClick={this.handleNewQuestion}>Update Equation</button>
        <button onClick={this.handleSavedQuickQuestion}>Save Equation</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    question: state.question
  };
};

export default connect(
  mapStateToProps,
  { helperSaveQuickQuestion }
)(QuickQuestion);
