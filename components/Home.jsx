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
        empid: "E101",
        name: "Mark",
        department: "Project Manager",
        location: "TVM"
    },
    {
        empid: "E102",
        name: "Jacob",
        department: "UX Designer",
        location: "Kochi"
    },
    {
        empid: "E103",
        name: "Jane Smith",
        department: "Data Analyst",
        location: "Bangalore"
    }
]

const Home = () => {
    return (


        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell align="centre">Name</TableCell>
                        <TableCell align="centre">Department&nbsp;</TableCell>
                        <TableCell align="centre">Location&nbsp;</TableCell>
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
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default Home