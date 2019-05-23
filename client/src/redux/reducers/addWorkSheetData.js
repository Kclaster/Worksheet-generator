import { ADD_WORKSHEET_DATA } from '../actions/types';

const initialState = {
    data: [],
    // displayAnswers: false,
}

export default function addWorksheetData(state = initialState, action) {
    console.log('addWorksheetData Reducer', action.payload)
    switch (action.type) {
        case ADD_WORKSHEET_DATA:
            return {
                ...state,
                data: action.payload,
            }
        default:
            return state

        }
    }
    