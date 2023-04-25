import React from 'react'
import Question from '../components/Question'
import {Link} from 'react-router-dom'

function QuizScreen(props) {

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