import { ADD_CATEGORY, DELETE_CATEGORY, UPDATE_CATEGORY } from "../actions/types";

const category = (state=[],action) =>{
    switch(action.type){
        case ADD_CATEGORY :
            return [...state,action.payload];
        case UPDATE_CATEGORY:
            return [...state,action.payload];
        case DELETE_CATEGORY:
            return [...state,action.payload];
        default:
            return state;
    }
}

export default category;