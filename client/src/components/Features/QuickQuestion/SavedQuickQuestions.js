import React from 'react';
import styled from 'styled-components';
import './QuickQuestion.css';
import axios from 'axios';
import { connect } from 'react-redux';
import {
  addQuestionToWorksheetdata,
  deleteQuestionToWorksheetdata,
  deleteQuestionToSaved
} from '../../../redux/actions';

const SavedQuickQuestion = props => {
  const handleClickAdd = question => {
    console.log(question);
    this.props.addQuestionToWorksheetdata(question);
  };

  const handleClickDelete = question => {
    this.props.deleteQuestionToWorksheetdata(question);
  };

  const StyledUl = styled.ul({
    width: '120px',
    height: '120px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'relative',
    paddingTop: '25px'
  });

  const StyledButton = styled.button({
    position: 'absolute',
    top: 5,
    right: 5,
    color: 'red',
    border: '1px sold red',
    backgroundColor: 'transparent'
  });

  const handleRemoveFromSaved = question => {
    props.deleteQuestionToSaved(question);
  };

  return (
    <div>
      {props.question.map(e => {
        return (
          <div>
            <StyledUl>
              <StyledButton onClick={() => handleRemoveFromSaved(e)}>
                x
              </StyledButton>
              <div>{e.question}</div>
              <div>{e.answer}</div>
              <button onClick={() => handleClickAdd(e)}>Add</button>
              <button onClick={() => handleClickDelete(e)}>Remove</button>
            </StyledUl>
          </div>
        );
      })}
    </div>
  );
};

const mapStateToProps = state => {
  console.log(state.savedQuestion);
  return {
    question: state.savedQuestion.worksheetQuestion
  };
};
export default connect(
  mapStateToProps,
  {
    addQuestionToWorksheetdata,
    deleteQuestionToWorksheetdata,
    deleteQuestionToSaved
  }
)(SavedQuickQuestion);
