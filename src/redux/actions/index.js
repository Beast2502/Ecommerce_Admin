import { ADD_BANNER, SAVE_COMMENT ,ADD_CATEGORY} from "./types";


export function saveComment(comment){
    console.log(comment,"Action")
    return {
        type: SAVE_COMMENT,
        payload:comment
    };
}

export function addBanner(banner){
    return {
        type : ADD_BANNER,
        payload : banner
    }
}

export const addCategory =(category)=>{
    return{
        type : ADD_CATEGORY,
        payload : category
    }
}

