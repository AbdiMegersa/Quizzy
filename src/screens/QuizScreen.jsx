import React from 'react'
import Question from '../components/Question'
import {Link} from 'react-router-dom'
import data from '../data'
import { useSelector } from 'react-redux'
import UseAxios from '../hooks/useAxios'

function QuizScreen(props) {

    const {
        question_category,
        question_difficulty,
        question_type,
        amount_of_question,
      } = useSelector(state => state)
      
      console.log(
        question_category,
        question_difficulty,
        question_type,
        amount_of_question,
      )
      
      var apiUrl = `/api.php?amount=${amount_of_question}`;
      if (question_category.length !== 0) {
        apiUrl += `&category=${question_category}`;
      }
      if (question_difficulty.length !== 0) {
        apiUrl += `&difficulty=${question_difficulty}`;
      }
      if (question_type.length !== 0) {
        apiUrl += `&type=${question_type}`;
      }
    //   console.log(apiUrl);

    const {response, loading} = UseAxios({url: apiUrl}) 
    console.log(response)
    return (
        <div className="quiz-screen">
            <h1>Quiz</h1>
           
            <Link to="/result">
                Check result
            </Link>
        </div>
    )

}
export default QuizScreen;