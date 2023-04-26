import * as actionTypes from './actionTypes'
const initialState = {
    question_category: "",
    question_difficulty: "",
    question_type: "",
    amount_of_question: 10,
    score: 0,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.CHANGE_CATEGORY:
            return {
                ...state,
                question_category: action.payload
            }
        case actionTypes.CHANGE_DIFFICULTY:
            return {
                ...state,
                question_difficulty: action.payload
            }
        case actionTypes.CHANGE_AMOUNT:
            return {
                ...state,
                amount_of_question: action.payload
            }
        case actionTypes.CHANGE_SCORE:
            return {
                ...state,
                score: action.payload
            }
            
        case actionTypes.CHANGE_TYPE:
            return {
                ...state,
                question_type: action.payload
            }
        
        default:
            break;
    }
    return state;
}
export default reducer;