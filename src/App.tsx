import React, {useState} from 'react';
import {useMovies} from "./hooks/useMovies";
import MoviesTable from "./components/MoviesTable";
import {AppBar, Box, CircularProgress, Container, Pagination, Toolbar} from "@mui/material";

function App() {
    const [page, setPage] = useState(1)
    const {movies, status, quantity} = useMovies(page)
    return (
        <>
            <AppBar position="sticky"><Toolbar>Тестовое задание Frontend JS/TS</Toolbar></AppBar>
            <Container>
                <Box display="flex" flexDirection="column" alignItems="center" sx={{"> *": {mt: 2}}}>
                    {quantity && <Pagination
                        page={page}
                        onChange={(event, page) => setPage(page)}
                        count={Math.ceil(quantity / 20)} />}
                    {status === "ok" && <MoviesTable
                        movies={movies}/>}
                    {(status === "none" || status === "fetching") && <CircularProgress/>}
                </Box>
            </Container>
        </>

    );
}

export default App;
