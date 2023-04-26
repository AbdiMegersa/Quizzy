import { Box, FormControl, TextField } from '@mui/material';
import React from 'react';
import { useDispatch } from 'react-redux';
import { handleAmountChange } from '../redux/actions';

const TextFieldComp = () => {

    const dispatch = useDispatch();
    const handleChange = (e) => {
        dispatch(handleAmountChange(e.target.value))        
    }

    return (
        <Box mt={3} width="70%">
            <FormControl fullWidth>
                <TextField 
                    type="number"
                    onChange={handleChange}
                    label="Amount of Question"
                    variant="outlined"
                    size="small"
                />
            </FormControl>
        </Box>
    );
}

export default TextFieldComp;
