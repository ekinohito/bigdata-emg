import {useState} from "react";
import {nanoid} from "nanoid";

export function useComments(movieId: number) {
    const [allComments, setAllComments] = useState<{ [movieId: number]: { id: string, value: string }[] }>({0: []})
    const comments = allComments[movieId] || []
    const addComments = (comment: string) => {
        setAllComments(allComments => {
            return {...allComments, [movieId]: [...comments, {id: nanoid(), value: comment}]}
        })
    }
    return {
        comments,
        addComments,
    }
}