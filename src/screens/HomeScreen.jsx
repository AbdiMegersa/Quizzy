import React from 'react';
// import {Link} from 'react-router-dom'    
import SelectField from '../components/SelectField'
import { Box, Button, CircularProgress } from '@mui/material';
import TextFieldComp from '../components/TextFieldComp';
import useAxios from '../hooks/useAxios'
import { useNavigate } from 'react-router-dom';

function HomeScreen(props) {

    const {response, error, loading} = useAxios( {url: "/api_category.php"})
    const navigate = useNavigate();

    if(loading) {
        return (
            <Box className="home-screen">
                <CircularProgress />
            </Box>
        )
    }
    if (error) {
        return (
            <Box className="home-screen">
                <h1>Something went wrong!</h1>
            </Box>
        )
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('hello mf')
        navigate('/quiz')
    }

    const difficultyOptions = [
        {id: "easy", name: "Easy"},
        {id: "medium", name: "Medium"},
        {id: "hard", name: "Hard"},
    ]
    const typeOptions = [
        {id: "multiple", name: "Multiple Choice"},
        {id: "boolean", name: "True/False"},
    ]



    return(
        <form className="home-screen" onSubmit={handleSubmit}>
            <h1>Settings</h1>
            <SelectField options={response.trivia_categories} label="Catagory" />
            <SelectField options={difficultyOptions} label="Difficulty" />
            <SelectField options={typeOptions} label="Type" />
            <TextFieldComp />
            <Box mt={2}>
                <Button type="submit" fullWidth variant="contained">
                    Get Started
                </Button>
            </Box>
        </form>
    )

}

export default HomeScreen;