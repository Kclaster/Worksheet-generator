import { SAVED_QUESTION } from './types';

export const setSavedQuestion = action => {
  return {
    type: SAVED_QUESTION,
    payload: action
  };
};
