import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const Add = () => {
    return (
        <>
            <Box
                // component="form"
                // sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
                // noValidate
                // autoComplete="off"
            ><br />
                <h2>New Employee</h2>
                <TextField id="standard-basic" label="Employee ID" variant="standard" /><br />
                <TextField id="standard-basic" label="Employee Name" variant="standard" /><br />
                <TextField id="standard-basic" label="Employee Department" variant="standard" /><br />
                <TextField id="standard-basic" label="Employee Location" variant="standard" /><br /><br />
                <button variant="contained">Submit</button>

            </Box>
        </>
    )
}

export default Add