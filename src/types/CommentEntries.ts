import {Comment} from "./Comment";

export interface CommentEntries {
    ids: string[]
    values: {[id: string]: Comment}
}