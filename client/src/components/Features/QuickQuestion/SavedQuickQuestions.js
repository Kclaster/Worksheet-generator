import React from 'react';
import './QuickQuestion.css';
import axios from 'axios';
import { connect } from 'react-redux';
import { addQuestionToWorksheetdata } from '../../../redux/actions';

class SavedQuickQuestion extends React.Component {
  handleClick = question => {
    console.log(question);
    this.props.addQuestionToWorksheetdata(question);
  };

  render() {
    return (
      <div>
        {this.props.question.map(e => {
          return (
            <div>
              <ul>
                <li>{e.question}</li>
                <li>{e.answer}</li>
                <button onClick={() => this.handleClick(e)}>Add</button>
              </ul>
            </div>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state.savedQuestion);
  return {
    question: state.savedQuestion
  };
};

export default connect(
  mapStateToProps,
  { addQuestionToWorksheetdata }
)(SavedQuickQuestion);
