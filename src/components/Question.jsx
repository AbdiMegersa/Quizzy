import React from 'react'
import Answer from './Answer';

function Question(props) {


    const {answers} = props


    return(
        <div className="quiz">
            <div className="question">
                {props.index + 1}. {props.question}
            </div>
            <div className='answers'>
                {answers.map((item, index) => 
                    <Answer  
                        key={item.id} 
                        index={index+1}
                        text={item.text}
                        choose={props.handleChoose}    
                    />)}
            </div>
            <hr className="horizontal" />
        </div>
    )
}

export default Question;