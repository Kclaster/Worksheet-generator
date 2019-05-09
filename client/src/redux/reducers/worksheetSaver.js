import { WORKSHEET_SAVER } from '../actions/types';

export default function saveWorksheet(state = [], action) {
    console.log('answer', action.payload)
    switch (action.type) {
        case WORKSHEET_SAVER:
            return [...state, action.payload] 
        default:
            return state
    };
}