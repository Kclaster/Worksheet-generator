import {SAVED_QUICKQUESTION , WORKSHEET_SAVER, WORKSHEET_DATA, ADD_QUICKQUESTION, ADD_WORKSHEET_DATA } from './types';

export const helperSaveQuickQuestion = (question) => {
    return {
        type: SAVED_QUICKQUESTION,
        payload: question
    }
}

export const saveWorksheet = (equations) =>{
    console.log('saveworksheet actions', equations)
    return {
        type: WORKSHEET_SAVER,
        payload: equations
    }

}

export const worksheetData = (question) =>{
    console.log('woksheetdata action', question)
    return {
        type: WORKSHEET_DATA,
        payload: question
    }

}

export const addWorkSheetData = question => {
    console.log('adding worksheet data', question)
    return {
        type: ADD_WORKSHEET_DATA,
        payload: question
    }
}

export const addQuickQuestion = (question) =>{
    console.log('woksheetdata action', question)
    return {
        type: ADD_QUICKQUESTION,
        payload: question
    }

}