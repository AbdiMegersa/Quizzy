import React from 'react'
import QuestionAnswer from '../components/QuestionAnswer'
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { handleAmountChange, handleScoreChange } from '../redux/actions';
import { Button, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
// import  {confetti} from 'react-confetti'
import Confetti from 'react-confetti';

function ResultScreen(){

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const score = useSelector(state => state.score)

    const handleBack = () => {
        dispatch(handleScoreChange(0))
        dispatch(handleAmountChange(10))
        navigate("/")
    }

    return (
        <div className="result-screen">
            <Confetti/>
            <Typography mb={2} fontWeight="bold" variant="h4">Final Score {score}</Typography>
            {/* Final Score {score} */}
            <Button variant="outlined" onClick={handleBack}>Back</Button>
        </div>
    )
}
export default ResultScreen;