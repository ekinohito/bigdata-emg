import React from 'react'
import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import MovieRow from "./MovieRow";
import {Movie} from "../types/Movie";

export default function MoviesTable(props: { movies: Movie[], setOpen: React.Dispatch<React.SetStateAction<number | null>> }) {
    return <TableContainer component={Paper}>
        <Table size="small">
            <TableHead>
                <TableRow>
                    <TableCell sx={{display: {xs: 'none', md: 'table-cell'}}}>id</TableCell>
                    <TableCell>imdb_code</TableCell>
                    <TableCell>title</TableCell>
                    <TableCell>year</TableCell>
                    <TableCell align="right">rating</TableCell>
                    <TableCell align="right">comments</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {props.movies.map((movie) => (
                    <MovieRow key={movie.id} movie={movie} openComments={() => props.setOpen(movie.id)}/>
                ))}
            </TableBody>
        </Table>
    </TableContainer>
}