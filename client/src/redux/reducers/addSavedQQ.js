import { ADD_QUICKQUESTION} from '../actions/types';

const initialState = {
    data: [],
    // displayAnswers: false,
}

export default function addQuickQuestion(state = initialState, action) {
    console.log('answer', action.payload)
    switch (action.type) {
        case ADD_QUICKQUESTION:
            return {
                ...state,
                data: action.payload,
            }
        default:
            return state

        }
    }
    