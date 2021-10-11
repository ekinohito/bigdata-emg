import React from 'react'
import {IconButton, Link, Rating, TableCell, TableRow} from "@mui/material";
import {Movie} from "../types/Movie";
import {Comment} from "@mui/icons-material";

export default function MovieRow(props: {movie: Movie, openComments: () => any}) {
    return <TableRow
        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
    >
        <TableCell sx={{display: {xs: 'none', sm: 'table-cell'}}} component="th" scope="row">
            {props.movie.id}
        </TableCell>
        <TableCell>
            <Link
                href={`https://imdb.com/title/${props.movie.imdb_code}`}
                target="_blank" rel="noopener" underline="hover">
                {props.movie.imdb_code}
            </Link>
        </TableCell>
        <TableCell>{props.movie.title}</TableCell>
        <TableCell>{props.movie.year}</TableCell>
        <TableCell align="right"><Rating value={props.movie.rating / 2} readOnly precision={0.1}/></TableCell>
        <TableCell align="right"><IconButton onClick={props.openComments}><Comment/></IconButton></TableCell>
    </TableRow>
}