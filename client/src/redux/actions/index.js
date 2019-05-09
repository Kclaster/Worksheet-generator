import {SAVED_QUICKQUESTION , WORKSHEET_SAVER, WORKSHEET_DATA} from './types';

export const helperSaveQuickQuestion = (question) => {
    return {
        type: SAVED_QUICKQUESTION,
        payload: question
    }
}

export const saveWorksheet = (equations) =>{
    console.log('poop', equations)
    return {
        type: WORKSHEET_SAVER,
        payload: equations
    }

}

export const worksheetData = (question) =>{
    console.log('poop', question)
    return {
        type: WORKSHEET_DATA,
        payload: question
    }

}