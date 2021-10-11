import {useState} from "react";
import {nanoid} from "nanoid";
import {MoviesComments} from "../types/MoviesComments";

export function useComments(movieId: number) {
    const [allComments, setAllComments] = useState<MoviesComments>({})
    const commentEntries = allComments[movieId] || {ids: [], values: {}}
    const comments = commentEntries.ids.filter(id => id in commentEntries.values).map(id => commentEntries.values[id])
    const addComments = (comment: string) => {
        setAllComments(prevState => {
            const id = nanoid()
            prevState[movieId] = prevState[movieId] || {ids: [], values: {}}
            prevState[movieId].ids.push(id)
            prevState[movieId].values[id] = {id, movieId, text: comment}
            return {...prevState}
        })
    }
    const deleteComments = (id: string) => {
        setAllComments(prevState => {
            delete prevState[movieId].values[id]
            return {...prevState}
        })
    }
    return {
        comments,
        addComments,
        deleteComments
    }
}