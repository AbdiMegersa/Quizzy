import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    questions: [],
    currentQuestion: 0,
    answers: {},
    status: 'idle',
    error: null,
}

const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    setQuestions: (state, action) => {
      state.questions = action.payload;
    },
    setCurrentQuestion: (state, action) => {
      state.currentQuestion = action.payload;
    },
    setAnswer: (state, action) => {
      const { questionId, answerId } = action.payload;
      state.answers[questionId] = answerId;
    },
    setStatus: (state, action) => {
      state.status = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
}
});

export const { setQuestions, setCurrentQuestion, setAnswer, setStatus, setError } = quizSlice.actions;
export default quizSlice.reducer;