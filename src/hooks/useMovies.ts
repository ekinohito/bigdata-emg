import {useEffect, useState} from "react";
import {Movie} from "../types/Movie";

export function useMovies(page: number = 1) {
    const [movies, setMovies] = useState<Movie[]>([])
    const [quantity, setQuantity] = useState<number | null>(null)
    const [status, setStatus] = useState<'none'|'fetching'|'ok'|'error'>('none')
    useEffect(() => {
        setStatus('fetching')
        fetch(`https://yts.mx/api/v2/list_movies.json?limit=20&page=${page}`)
            .then(res => res.json())
            .then(data => {
                if (data.status !== 'ok') throw new Error("Status not ok")
                setMovies(data.data.movies)
                setQuantity(data.data.movie_count)
                setStatus('ok')
            }).catch(reason => {
                console.warn(reason)
                setStatus('error')
            })
    }, [page])
    return { movies, status, quantity }
}