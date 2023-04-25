import React from 'react'
import {nanoid} from 'nanoid'

function QuestionAnswer(props) {

    const question = props.question;
    const correctAnswer = question.correct_answer
    const answers = [...question.incorrect_answers]
    
    answers.insert(Math.floor(Math.random()*4), correctAnswer)

    const ansElem = answers.map(answer => <div key={nanoid()} className={answer === correctAnswer ? 'answer correct' : 'answer'}>{answer}</div>)

    return(
        <div className="quiz">
            <div className="question">
                {question.question}
            </div>
            <div className='answers'>
                {ansElem}
            </div>
            <hr className="horizontal" />
        </div>
    )

}

export default QuestionAnswer;