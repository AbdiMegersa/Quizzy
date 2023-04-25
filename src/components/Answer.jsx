import React from 'react'

function Answer(props) {
    return(
        <div 
            className="answer"
            onClick={props.choose}
        >
            {props.index}. {props.text}
        </div>
    )
}
export default Answer