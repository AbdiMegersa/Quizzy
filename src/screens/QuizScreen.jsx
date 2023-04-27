import React , {useEffect, useState}  from 'react'
import Question from '../components/Question'
import {useNavigate} from 'react-router-dom'
import data from '../data'
import { useDispatch, useSelector } from 'react-redux'
import UseAxios from '../hooks/useAxios'
import { Box, Button, CircularProgress, Typography } from '@mui/material'
import { handleScoreChange } from '../redux/actions'
import {decode } from 'html-entities'

const getrandomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max))
}



function QuizScreen(props) {

    const {
        question_category,
        question_difficulty,
        question_type,
        amount_of_question,
        score,
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
//    console.log(response)
      const [questionIndex, setQuestionIndex] = useState(0)
      const [options, setOptions] = useState([])
      const dispatch = useDispatch()
      const navigate = useNavigate()

      useEffect(()=>{
        if(response?.results.length){
          const question = response.results[questionIndex]
          let answers = [...question.incorrect_answers]
          answers.splice(
            getrandomInt(question.incorrect_answers.length),
            0,
            question.correct_answer
          )
          setOptions(answers)
        }
      }, [response, questionIndex])

      console.log(options)
      

    if(loading){
      return (
        <Box className="quiz-screen">
          <CircularProgress />
        </Box>
      )
    }

    const handleClickAnswer = (e) => {
      // console.log("next clicked")
      const question = response.results[questionIndex]

      if(question.correct_answer === e.target.textContent){
        dispatch(handleScoreChange(score+1))
      }

      if(questionIndex + 1 < response.results.length){
        setQuestionIndex(questionIndex + 1)
      }else {
        navigate('/result')
      }
    }

    return (
        <Box className="quiz-screen">

          
          <Typography variant="h4" mr={2} style={{textAlign: 'center'}}>Question {questionIndex + 1}</Typography>
          <Typography mt={5}>{decode(response.results[questionIndex].question)}</Typography>
          {options.map((data, id) => (
            <Box key={id} mt={2}> 
              <Button 
                onClick={handleClickAnswer}
                variant="contained">
                {decode(data)}
              </Button>
            </Box>
          ))}



          <Typography>{score} / {response.results.length} </Typography>
        </Box>
    )

}
export default QuizScreen;