import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const Add = () => {

    const handleSubmit = () => {
        alert('Form submitted');
    };




    return (
        <>
            <Box
                // component="form"
                // sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
                // noValidate
                // autoComplete="off"
            ><br />
                <h2>Add Movie</h2>
                <TextField id="standard-basic" label="ID" variant="standard" /><br />
                <TextField id="standard-basic" label="Movie" variant="standard" /><br />
                <TextField id="standard-basic" label="Director" variant="standard" /><br />
                <TextField id="standard-basic" label="Movie Type" variant="standard" /><br /><br />
                <button variant="contained" onClick={handleSubmit} >Submit</button>

            </Box>
        </>
    )
}

export default Add