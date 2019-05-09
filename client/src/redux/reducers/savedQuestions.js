import { SAVED_QUICKQUESTION } from '../actions/types';

export default function savedQuickQuestion(state = [], action) {
    console.log('answer', action.payload)
    switch (action.type) {
        case SAVED_QUICKQUESTION:
            return [...state, action.payload] 
        default:
            return state
    };
}