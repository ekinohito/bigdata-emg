import React from 'react';
import {useMovies} from "./hooks/useMovies";

function App() {
    const {movies} = useMovies(1)
    return (
        <div>
            <ol>
                {movies.map(movie => <li>{movie.title}</li>)}
            </ol>
        </div>
    );
}

export default App;
