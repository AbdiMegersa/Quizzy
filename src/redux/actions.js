import * as actionTypes from "./actionTypes"

export const handleCategoryChange = (payload) => ({
    type: actionTypes.CHANGE_CATEGORY,
    payload
})
export const handleDifficultyChange = (payload) => ({
    type: actionTypes.CHANGE_DIFFICULTY,
    payload
})
export const handleTypeChange = (payload) => ({
    type: actionTypes.CHANGE_TYPE,
    payload
})
export const handleAmountChange = (payload) => ({
    type: actionTypes.CHANGE_AMOUNT,
    payload
})
export const handleScoreChange = (payload) => ({
    type: actionTypes.CHANGE_SCORE,
    payload
})