import { SAVED_QUESTION } from '../actionCreators/types';

export default (state = {}, action) => {
  switch (action.type) {
    case SAVED_QUESTION:
      return { ...state.question, question: { ...action.payload } };
    default:
      return state;
  }
};
