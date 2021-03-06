import React, {useState} from 'react';
import {useMovies} from "./hooks/useMovies";
import MoviesTable from "./components/MoviesTable";
import {AppBar, Box, CircularProgress, Container, Link, Pagination, Toolbar, Typography} from "@mui/material";
import Comments from "./components/Comments";

function App() {
    const [page, setPage] = useState(1)
    const [open, setOpen] = React.useState<number | null>(null);
    const {movies, status, quantity} = useMovies(page)
    return (
        <>
            <AppBar position="sticky"><Toolbar sx={{flexWrap: "wrap"}}>
                <Typography variant={"h5"} sx={{flexGrow: 1}}>Тестовое задание Frontend JS/TS</Typography>
                <Link color="text.secondary" href="https://github.com/ekinohito/bigdata-emg">@ekinohito/bigdata-emg</Link>
            </Toolbar></AppBar>
            <Container>
                <Box display="flex" flexDirection="column" alignItems="center" sx={{"> *": {mt: 2}}}>
                    {quantity && <Pagination
                        page={page}
                        onChange={(event, page) => setPage(page)}
                        count={Math.ceil(quantity / 20)} />}
                    {status === "ok" && <MoviesTable
                        movies={movies} setOpen={setOpen}/>}
                    {(status === "none" || status === "fetching") && <CircularProgress/>}
                </Box>
            </Container>
            <Comments open={open} setOpen={setOpen}/>
        </>

    );
}

export default App;
