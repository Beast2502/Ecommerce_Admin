import { SAVE_COMMENT } from "./types";

export function saveComment(comment){
    console.log(comment,"Action")
    return {
        type: SAVE_COMMENT,
        payload:comment
    };
}