import { SAVE_COMMENT } from "../actions/types";

function comments(state = [] , action){
    switch(action.type){
        case SAVE_COMMENT:
          
            console.log("reducer",state , action.payload)
            return [...state, action.payload];
        default:
            return state;
    }
}

export default comments;