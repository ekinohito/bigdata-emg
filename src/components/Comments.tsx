import React, {useEffect, useState} from 'react'
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle, IconButton,
    List, ListItem,
    TextField
} from "@mui/material";
import {useComments} from "../hooks/useComments";
import {Delete} from "@mui/icons-material";

export default function Comments(props: { open: number | null, setOpen: React.Dispatch<React.SetStateAction<number | null>> }) {
    const {comments, addComments, deleteComments} = useComments(props.open || 0)
    const [text, setText] = useState('')
    useEffect(() => {
        setText('')
    }, [props.open])
    return <Dialog open={props.open !== null} onClose={() => props.setOpen(null)}>
        <DialogTitle>Комментарии</DialogTitle>
        <DialogContent>
            <List>
                {comments.map(comment => <ListItem key={comment.id}>
                    {comment.text}
                    <IconButton onClick={() => deleteComments(comment.id)}><Delete/></IconButton>
                </ListItem>)}
            </List>
        </DialogContent>
        <DialogActions>
            <TextField value={text} onChange={event => setText(event.target.value)}/>
            <Button onClick={() => addComments(text)}>Добавить</Button>
        </DialogActions>
    </Dialog>
}