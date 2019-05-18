import React from "react";
import { connect } from "react-redux";
import {
  addQuestionToWorksheetdata,
  deleteQuestionToWorksheetdata,
  deleteQuestionToSaved
} from "../../../redux/actions";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";

const SavedQuickQuestion = props => {
  const handleClickAdd = question => {
    props.addQuestionToWorksheetdata(question);
  };

  const handleClickDelete = question => {
    props.deleteQuestionToWorksheetdata(question);
  };

  const handleRemoveFromSaved = question => {
    props.deleteQuestionToSaved(question);
  };

  return (
    <div>
      {props.question.map(e => {
        return (
          <div>
            <Paper>
              <br />
              <div>{e.question}</div>
              <div>{e.answer}</div>
              <br />
              <Button
                variant="contained"
                color="secondary"
                onClick={() => handleClickAdd(e)}
              >
                Add
              </Button>
              <Button
                variant="contained"
                color="secondary"
                onClick={() => handleClickDelete(e)}
              >
                Remove
              </Button>
              <Button
                variant="contained"
                color="secondary"
                onClick={() => handleRemoveFromSaved(e)}
              >
                x
              </Button>
              {/* </StyledUl> */}
            </Paper>
          </div>
        );
      })}
    </div>
  );
};

const mapStateToProps = state => {
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
