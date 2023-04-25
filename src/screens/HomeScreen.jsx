import React from 'react';
import {Link} from 'react-router-dom'

function HomeScreen(props) {

    const startElement = <div className="quiz-info">
        <p> HOME Screen</p>
        <h1>Quizzy</h1>
        <p>Quizzy is powered by Open trivial Database API <br />The Open Trivia Database provides a completely free JSON API for use in programming projects. Use of this API does not require a API Key, just generate the URL below use it in your own application to retrieve trivia questions</p>
        <Link to="/quiz">
            <button> Start Quiz </button>
        </Link>
    </div>

    return(
        <div className="home-screen">
            {startElement}
        </div>
    )

}

export default HomeScreen;