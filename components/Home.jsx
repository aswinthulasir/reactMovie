import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const rows = [
    {
        empid: "101",
        name: "ARM",
        department: "Anonymous",
        location: "Thriller",
        year:"2024"
    },
    {
        empid: "102",
        name: "Jacobinte Swargarajyam",
        department: "Vineeth Sreenivasan",
        location: "Feel good",
        year:"2015"
    },
    {
        empid: "103",
        name: "Kaathal",
        department: "Jeo Baby",
        location: "Political",
        year:"2023"
    }
]

const Home = () => {
    return (

        
        

        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell align="centre">Movie</TableCell>
                        <TableCell align="centre">Director&nbsp;</TableCell>
                        <TableCell align="centre">Type&nbsp;</TableCell>
                        <TableCell align="centre">Year&nbsp;</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {row.empid}
                            </TableCell>
                            <TableCell align="centre">{row.name}</TableCell>
                            <TableCell align="centre">{row.department}</TableCell>
                            <TableCell align="centre">{row.location}</TableCell>
                            <TableCell align="centre">{row.year}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default Home