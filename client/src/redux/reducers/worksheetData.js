import { WORKSHEET_DATA } from '../actions/types';

export default function worksheetData(state = [], action) {
    console.log('answer', action.payload)
    switch (action.type) {
        case WORKSHEET_DATA:
            return [...state, action.payload] 
        default:
            return state
    };
}