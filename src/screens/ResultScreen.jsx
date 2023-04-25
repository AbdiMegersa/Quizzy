import React from 'react'
import QuestionAnswer from '../components/QuestionAnswer'
import { Link } from 'react-router-dom';

function ResultScreen(props){

    return (
        <div className="result-screen">
            Check Your Result
            <Link to="/quiz">
                Retake
            </Link>
        </div>
    )
}
export default ResultScreen;