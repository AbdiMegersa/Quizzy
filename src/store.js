import quizReducer from './features/quiz/quizSlice'
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
   reducer: {
    quiz: quizReducer
   }
})

export default store;