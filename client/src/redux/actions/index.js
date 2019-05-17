import {
  ADD_QUESTION_TO_WORKSHEETDATA,
  SAVED_QUICKQUESTION,
  WORKSHEET_SAVER,
  WORKSHEET_DATA,
  SAVE_USERNAME
} from './types';

export const addQuestionToWorksheetdata = question => {
  return {
    type: ADD_QUESTION_TO_WORKSHEETDATA,
    payload: question
  };
};

export const helperSaveQuickQuestion = question => {
  return {
    type: SAVED_QUICKQUESTION,
    payload: question
  };
};

export const saveWorksheet = (equations, username) => {
  console.log('saveworksheet actions', equations);
  return {
    type: WORKSHEET_SAVER,
    payload: { equations, username }
  };
};

export const worksheetData = question => {
  console.log('woksheetdata action', question);
  return {
    type: WORKSHEET_DATA,
    payload: question
  };
};

export const saveUsername = userName => {
  return {
    type: SAVE_USERNAME,
    payload: userName
  };
};
